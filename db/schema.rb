# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190305014635) do

  create_table "comments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text     "comment",    limit: 65535
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "ratings", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "price"
    t.integer  "taste"
    t.integer  "service"
    t.integer  "atmosphere"
    t.integer  "overall"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "restaurant_comments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "restaurant_id"
    t.integer  "comment_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["comment_id"], name: "index_restaurant_comments_on_comment_id", using: :btree
    t.index ["restaurant_id"], name: "index_restaurant_comments_on_restaurant_id", using: :btree
  end

  create_table "restaurant_ratings", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "restaurant_id"
    t.integer  "rating_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["rating_id"], name: "index_restaurant_ratings_on_rating_id", using: :btree
    t.index ["restaurant_id"], name: "index_restaurant_ratings_on_restaurant_id", using: :btree
  end

  create_table "restaurant_users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "restaurant_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["restaurant_id"], name: "index_restaurant_users_on_restaurant_id", using: :btree
    t.index ["user_id"], name: "index_restaurant_users_on_user_id", using: :btree
  end

  create_table "restaurants", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",                  null: false
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "address"
    t.float    "latitude",   limit: 24
    t.float    "longitude",  limit: 24
  end

  create_table "user_comments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "comment_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["comment_id"], name: "index_user_comments_on_comment_id", using: :btree
    t.index ["user_id"], name: "index_user_comments_on_user_id", using: :btree
  end

  create_table "user_ratings", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "rating_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rating_id"], name: "index_user_ratings_on_rating_id", using: :btree
    t.index ["user_id"], name: "index_user_ratings_on_user_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",                                null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "restaurant_comments", "comments"
  add_foreign_key "restaurant_comments", "restaurants"
  add_foreign_key "restaurant_ratings", "ratings"
  add_foreign_key "restaurant_ratings", "restaurants"
  add_foreign_key "restaurant_users", "restaurants"
  add_foreign_key "restaurant_users", "users"
  add_foreign_key "user_comments", "comments"
  add_foreign_key "user_comments", "users"
  add_foreign_key "user_ratings", "ratings"
  add_foreign_key "user_ratings", "users"
end
