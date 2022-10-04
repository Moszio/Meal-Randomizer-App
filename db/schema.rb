# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_30_203515) do
  create_table "notes", force: :cascade do |t|
    t.text "note"
    t.integer "restaurant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "price_range"
    t.string "address"
    t.string "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "image"
    t.string "email"
    t.integer "total_randomized"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "visitations", force: :cascade do |t|
    t.integer "user_id"
    t.integer "restaurant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
