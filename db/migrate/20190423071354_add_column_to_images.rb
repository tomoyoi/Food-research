class AddColumnToImages < ActiveRecord::Migration[5.0]
  def change
    add_column :images, :image, :string, null: false
  end
end
