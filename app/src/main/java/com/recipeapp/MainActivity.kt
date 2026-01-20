package com.recipeapp

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.cardview.widget.CardView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Set up click listener for Add Recipe card
        val addRecipeCard = findViewById<CardView>(R.id.cardAddRecipe)
        addRecipeCard.setOnClickListener {
            val intent = Intent(this, AddRecipeActivity::class.java)
            startActivity(intent)
        }

        // Set up click listener for View Recipes card
        val viewRecipesCard = findViewById<CardView>(R.id.cardViewRecipes)
        viewRecipesCard.setOnClickListener {
            val intent = Intent(this, ViewRecipesActivity::class.java)
            startActivity(intent)
        }
    }
}
