class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :location
      t.string :title
      t.string :type
      t.string :date
      t.string :addess

      t.timestamps
    end
  end
end
