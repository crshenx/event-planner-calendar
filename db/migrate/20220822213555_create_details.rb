class CreateDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :details do |t|
      t.string :notes
      t.string :staffing

      t.timestamps
    end
  end
end
