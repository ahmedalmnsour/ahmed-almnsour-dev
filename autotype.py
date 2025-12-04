import pyautogui
import time

# تم ضغط الكود وإزالة الأسطر الفارغة الزائدة
code_to_type = """# The Old Way: 3 endpoints needed ❌
# GET /api/users/1
# GET /api/users/1/posts
# GET /api/users/1/followers

# The GraphQL Way: One Request ✅
query GetUserProfile {
  user(id: "101") {
    username
    avatar
    isVerified
    # Nested data in one go!
    posts(limit: 5) {
      title
      likesCount
      comments { text }
    }
    followers {
      count
      topFollowers { name }
    }
  }
}
"""

print("------------------------------------------------")
print("⚠️  تأكد أن لغة الكيبورد إنجليزية (EN)")
print("⚠️  تأكد من إيقاف Auto Closing Brackets")
print("👉  انقر داخل الملف، سيبدأ بعد 5 ثوانٍ...")
print("------------------------------------------------")

time.sleep(5)

# السرعة الآن 0.2 (أبطأ وأكثر واقعية)
pyautogui.write(code_to_type, interval=0.2)