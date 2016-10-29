class CreateRecords < ActiveRecord::Migration[5.0]
  def change
    create_table :records do |t|
      t.float :latitude
      t.float :longitude
      t.integer :device_id
      t.datetime :created_at

      t.timestamps
    end
  end
end
