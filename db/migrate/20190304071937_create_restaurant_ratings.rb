class CreateRestaurantRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurant_ratings do |t|
      t.references :restaurant, foreign_key: true
      t.references :rating, foreign_key: true
      t.timestamps
    end
  end
end
