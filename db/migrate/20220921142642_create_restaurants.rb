class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :image
      t.string :price_range
      t.string :address
      t.string :website
      t.timestamps
    end
  end
end
