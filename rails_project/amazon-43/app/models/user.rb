class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: { case_sensitive: false }
    validates :first_name, presence: true
    validates :last_name, presence: true

    has_many :products, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :news_articles, dependent: :destroy

    validates :first_name, :last_name, :email, :password, presence: true

    def full_name
        "#{first_name} #{last_name}".strip.titlecase
    end
end