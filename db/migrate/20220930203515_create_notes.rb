class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :note
      t.integer :restaurant_id
      t.timestamps
    end
  end
end
