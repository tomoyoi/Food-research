# README

##  restaurants table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|address|string|null: false|
|latitude|float|null: false|
|longitude|float|null: false|
|user_id|integer|foreign_key: true|
|rating_id|integer|foreign_key: true|
|comment_id|integer|foreign_key: true|

### Association

- has_many :users, through: :restaurant-user
- has_many :ratings, through: :restaurant-rating
- has_many :comments, through: :restaurant-comment

## users table

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|restaurant_id|integer|foreign_key: true|
|rating_id|integer|foreign_key: true|
|comment_id|integer|foreign_key: true|

### Association

- has_many :restaurants, through: :restaurant-user
- has_many :ratings, through: :user-rating
- has_many :comments, through: :user-comment

## ratings table

|Column|Type|Options|
|------|----|-------|
|price|integer|
|taste|integer|
|service|integer|
|atmosphere|integer|
|over-all|integer|null: false|
|restaurant_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association

- has_many :restaurants, through: :restaurant-rating
- has_many :ratings, through: :user-rating

## comments table

|Column|Type|Options|
|------|----|-------|
|comment|text|
|restaurant_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association

- has_many :restaurants, through: :restaurant-comment
- has_many :users, through: :user-comment

##  restaurant-users table

|Column|Type|Options|
|------|----|-------|
|restaurant_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association

- belongs_to :restaurants
- belongs_to :users

##  restaurant-ratings table

|Column|Type|Options|
|------|----|-------|
|restaurant_id|integer|foreign_key: true|
|rating_id|integer|foreign_key: true|

### Association

- belongs_to :restaurants
- belongs_to :ratings

##  restaurant-comments table

|Column|Type|Options|
|------|----|-------|
|restaurant_id|integer|foreign_key: true|
|comment_id|integer|foreign_key: true|

### Association

- belongs_to :restaurants
- belongs_to :comments

##  user-ratings table

|Column|Type|Options|
|------|----|-------|
|rating_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association

- belongs_to :users
- belongs_to :ratings

##  user-comments table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|comment_id|integer|foreign_key: true|

### Association

- belongs_to :users
- belongs_to :comments