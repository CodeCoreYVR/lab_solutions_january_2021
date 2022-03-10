FactoryBot.define do
  factory :news_article do
    title { "MyString" }
    description { "MyText" }
    published_at { "2022-03-10 14:30:41" }
    view_count { 1 }
  end
end
