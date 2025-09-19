from datetime import datetime, timedelta, timezone

# import datetime

dt = datetime.now(tz=timezone.utc)
dt2 = datetime.now()


print(dt)  # 2025-09-19 15:09:00.758659
# print(dt2)  # 2025-09-19 15:09:00.758659
print(dt.hour)
print(dt.minute)
print(dt.month)
print(dt.day)  # monday = 0 / 1 -> sunday
print(dt.year)
print(dt.isoformat("_"))

add_hours = timedelta(days=5, hours=5)

print(dt + add_hours)
print(dt - add_hours)
# print(dt.date())
