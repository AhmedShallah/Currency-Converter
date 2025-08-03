'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowUpDown, Loader2 } from 'lucide-react';
import { CurrencySelect } from './currency-select';
import { getExchangeRates, convertCurrency } from '../utils/exchange-rates';
import { getCurrencyByCode } from '../utils/currencies';
import { useLanguage } from '../providers';

export function CurrencyConverter() {
  const { t, language } = useLanguage();
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('ILS');
  const [rates, setRates] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchRates = useCallback(async () => {
    setIsLoading(true);
    try {
      const newRates = await getExchangeRates('USD');
      setRates(newRates);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Failed to fetch rates:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 5 * 60 * 1000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, [fetchRates]);

  const convertedAmount = amount && !isNaN(Number(amount)) && Object.keys(rates).length > 0
    ? convertCurrency(Number(amount), fromCurrency, toCurrency, rates)
    : 0;

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleAmountChange = (value: string) => {
    // Allow empty string, numbers, and decimal points
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const fromCurrencyData = getCurrencyByCode(fromCurrency);
  const toCurrencyData = getCurrencyByCode(toCurrency);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
      maximumFractionDigits: 6,
      minimumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-effect rounded-2xl p-8 shadow-xl">
        {/* Amount Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-muted-foreground mb-3">
            {t('amount')}
          </label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
              placeholder={t('enterAmount')}
              className="w-full px-6 py-4 text-2xl font-semibold bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200"
              dir="ltr"
            />
            {fromCurrencyData && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                {fromCurrencyData.symbol}
              </div>
            )}
          </div>
        </div>

        {/* Currency Selection */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end mb-8">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-3">
              {t('from')}
            </label>
            <CurrencySelect
              value={fromCurrency}
              onChange={setFromCurrency}
            />
          </div>

          <button
            onClick={handleSwapCurrencies}
            className="order-first md:order-none mb-8 md:mb-0 mx-auto p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label={t('swap')}
          >
            <ArrowUpDown className="w-5 h-5" />
          </button>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-3">
              {t('to')}
            </label>
            <CurrencySelect
              value={toCurrency}
              onChange={setToCurrency}
            />
          </div>
        </div>

        {/* Conversion Result */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
          {isLoading ? (
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-lg">{t('loading')}</span>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" dir="ltr">
                {toCurrencyData?.symbol}{formatNumber(convertedAmount)}
              </div>
              <div className="text-sm text-muted-foreground">
                {amount && Number(amount) > 0 && (
                  <span dir="ltr">
                    {fromCurrencyData?.symbol}{formatNumber(Number(amount))} {fromCurrency} = {toCurrencyData?.symbol}{formatNumber(convertedAmount)} {toCurrency}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Last Updated */}
        {lastUpdated && !isLoading && (
          <div className="text-center mt-4 text-xs text-muted-foreground">
            {language === 'ar' ? 'آخر تحديث: ' : 'Last updated: '}
            <span dir="ltr">
              {lastUpdated.toLocaleTimeString(language === 'ar' ? 'ar-SA' : 'en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}