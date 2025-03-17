'''
# Topics
import datetime

1. datetime.date
        from datetime import date
        today = date.today()
                
        methods: 
        date.today(): Returns the current local date.
        date(year, month, day): Creates a date object.
        date.fromisoformat('YYYY-MM-DD'): Parses an ISO 8601 date string.


2. datetime.time        
        from datetime import time
        t = time(14, 30, 15)

        methods: 
        time(hour, minute, second, microsecond=0): Creates a time object.
    
    
3. datetime.datetime
        from datetime import datetime
        now = datetime.now()
   
        methods:      
        datetime.now(): Returns the current date and time.
        datetime.today(): Similar to now(), without timezone awareness.
        datetime(year, month, day, hour, minute, second, microsecond): Creates a datetime object.
        datetime.fromisoformat('YYYY-MM-DD HH:MM:SS'): Parses an ISO 8601 datetime string.
   
   
4. datetime.timedelta
        from datetime import timedelta
        future_date = datetime.now() + timedelta(days=10)
    
        methods: 
        timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0): Creates a time difference object.


5. datetime.timezone
        from datetime import timezone, timedelta
        utc_offset = timezone(timedelta(hours=5, minutes=30))  # IST timezone    
    
        methods:    
        utc_offset = timezone(timedelta(hours=5, minutes=30))  # IST timezone


# Formatting and Parsing Dates
    Formatting (strftime)
        now = datetime.now()
        formatted = now.strftime("%Y-%m-%d %H:%M:%S")
    
    Parsing (strptime)
        date_string = "2025-03-05 14:45:10"
        parsed_date = datetime.strptime(date_string, "%Y-%m-%d %H:%M:%S")

# Timezone Handling
    Using pytz for Advanced Timezone Support
        from datetime import datetime
        import pytz

        utc = pytz.utc
        ist = pytz.timezone("Asia/Kolkata")

        utc_now = datetime.now(utc)
        ist_now = utc_now.astimezone(ist)
    
    
# Date Arithmetic
    Difference Between Two Dates
        from datetime import date

        d1 = date(2025, 3, 5)
        d2 = date(2024, 3, 5)
        difference = d1 - d2

'''
