class AddKeys < ActiveRecord::Migration[7.0]
  def change
    # add_reference :events, :users, index:true
    add_column :events, :user_id, :integer

    # add_reference :events, :planners, index:true
    # add_foreign_key :events, :planners
    add_column :events, :planner_id, :integer

    # add_foreign_key :pay, :events
    add_column :pays, :event_id, :integer

    add_column :details, :event_id, :integer

  end
end
