class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
    t.integer :price
    t.integer :taste
    t.integer :service
    t.integer :atmosphere
    t.integer :overall
    t.references :restaurant, foreign_key: true
    t.references :user, foreign_key: true
    t.timestamps
    end
  end
end
