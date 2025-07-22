import React, { useState } from 'react';
import { Label } from './label';
import { cn } from '@/lib/utils';
import { MonthPicker } from './monthpicker';
import { Button } from './button';
import { CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

interface DateRangePickerProps {
  startDate: string | null | undefined;
  endDate: string | null | undefined;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  className?: string;
}

export function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  className,
}: DateRangePickerProps) {
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);

  // Convert string dates to Date objects for MonthPicker
  const startDateObj = startDate ? new Date(startDate) : undefined;
  const endDateObj = endDate ? new Date(endDate) : undefined;

  // Handle month selection
  const handleStartMonthSelect = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    onStartDateChange(`${year}-${month}-01`);
    setStartOpen(false);
  };

  const handleEndMonthSelect = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    onEndDateChange(`${year}-${month}-01`);
    setEndOpen(false);
  };

  return (
    <div className={cn('flex flex-col space-y-4', className)}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0">
        <div className="flex-1 sm:mr-2">
          <Label className="text-sm font-medium text-slate-400 mb-2 block">
            Start Date
          </Label>
          <Popover open={startOpen} onOpenChange={setStartOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !startDateObj && 'text-muted-foreground'
                )}
              >
                <div className="flex items-center w-full">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span className="flex-1">
                    {startDateObj
                      ? format(startDateObj, 'MMM yyyy')
                      : 'Pick a start month'}
                  </span>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <MonthPicker
                selectedMonth={startDateObj}
                onMonthSelect={handleStartMonthSelect}
                maxDate={endDateObj}
                variant={{
                  calendar: {
                    main: 'ghost',
                    selected: 'default',
                  },
                  chevrons: 'outline',
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex-1 sm:ml-2">
          <Label className="text-sm font-medium text-slate-400 mb-2 block">
            End Date
          </Label>
          <Popover open={endOpen} onOpenChange={setEndOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !endDateObj && 'text-muted-foreground'
                )}
              >
                <div className="flex items-center w-full">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span className="flex-1">
                    {endDateObj
                      ? format(endDateObj, 'MMM yyyy')
                      : 'Pick an end month'}
                  </span>
                  {endDateObj && (
                    <div
                      role="button"
                      className="h-4 w-4 p-0 flex items-center justify-center hover:bg-accent rounded-sm cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEndDateChange('');
                      }}
                    >
                      <X className="h-3 w-3" />
                    </div>
                  )}
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <MonthPicker
                selectedMonth={endDateObj}
                onMonthSelect={handleEndMonthSelect}
                minDate={startDateObj}
                variant={{
                  calendar: {
                    main: 'ghost',
                    selected: 'default',
                  },
                  chevrons: 'outline',
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
