interface ExchangeRateResponse {
  success: boolean;
  base: string;
  date: string;
  rates: Record<string, number>;
}

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, { data: ExchangeRateResponse; timestamp: number }>();

export async function getExchangeRates(baseCurrency: string = 'USD'): Promise<Record<string, number>> {
  const cacheKey = `rates_${baseCurrency}`;
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data.rates;
  }

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`,
      { 
        cache: 'no-store',
        headers: {
          'Accept': 'application/json',
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ExchangeRateResponse = await response.json();
    
    if (!data.success && data.success !== undefined) {
      throw new Error('API returned unsuccessful response');
    }
    
    cache.set(cacheKey, { data, timestamp: Date.now() });
    return data.rates;
  } catch (error) {
    console.error('Failed to fetch exchange rates:', error);
    
    // Return cached data if available, even if expired
    if (cached) {
      return cached.data.rates;
    }
    
    // Fallback rates for basic functionality
    return {
      USD: 1,
      ILS: 3.7,
      EUR: 0.85,
      GBP: 0.73,
      JPY: 110,
    };
  }
}

export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: Record<string, number>
): number {
  if (fromCurrency === toCurrency) {
    return amount;
  }
  
  // Convert to USD first if needed
  const amountInUSD = fromCurrency === 'USD' ? amount : amount / (rates[fromCurrency] || 1);
  
  // Convert from USD to target currency
  const convertedAmount = toCurrency === 'USD' ? amountInUSD : amountInUSD * (rates[toCurrency] || 1);
  
  return Math.round(convertedAmount * 100) / 100;
}