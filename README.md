# README

This is a web app which finds restaurants within two kilometers of your location using your search keywords. It pulls restaurants based on their distance, rating, and demographic of their typical visitor. The app goal is to focus on the individual's wants and experience.

##  restaurants table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|address|string|null: false|
|user_id|integer|foreign_key: true|
|rating_id|integer|foreign_key: true|
|image_id|integer|foreign_key: true|

### Association

- has_many :users, through: :images and ratings
- has_many :images
- has_many :ratings

## users table

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|profile|text|
|restaurant_id|integer|foreign_key: true|
|rating_id|integer|foreign_key: true|
|image_id|integer|foreign_key: true|

### Association

- has_many :restaurants, through: :images and ratings
- has_many :images
- has_many :ratings

## ratings table

|Column|Type|Options|
|------|----|-------|
|food|integer|null: false|
|service|integer|null: false|
|atmosphere|integer|null: false|
|over-all|integer|null: false|
|restaurant_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|
|comment|text|

### Association

- belongs_to :users
- belongs_to :restaurants

## images table

|Column|Type|Options|
|------|----|-------|
|restaurant_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association

- belongs_to :users
- belongs_to :restaurants

