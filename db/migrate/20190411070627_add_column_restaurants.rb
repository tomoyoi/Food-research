class AddColumnRestaurants < ActiveRecord::Migration[5.0]
  def change
    remove_column :latitude, :integer
  end
end
