class CreatePays < ActiveRecord::Migration[7.0]
  def change
    create_table :pays do |t|
      t.string :start_time
      t.string :end_time
      t.string :status
      t.integer :pay_rate
      t.integer :estimate_hours

      t.timestamps
    end
  end
end
