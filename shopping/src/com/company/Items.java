package com.company;

public class Items implements NewItems {

      private String title;
      private String brand;
      private double price ;
      private double rating;

    @Override
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    @Override
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public Items() {
        this.title = Console.readString("Enter the Product Title : ");
        this.brand = Console.readString("Enter Product Brand :");
        this.price = Console.readNumber("Enter the price of Product: ", 0, 100000);
        this.rating = Console.readNumber("Rating : ",0,6);
        System.out.println("Product Info");
        System.out.println("Name : " + title + ", Price : " + price + ", Brand : " + brand + ", Rating : " + rating
        );
    }

    public Items(String title, String brand, double price, double rating){
        this.title=title;
        this.brand= brand;
        this.price=price;
        this.rating=rating;
        System.out.println("Product Info");
        System.out.println("Name : " + title + ", Price : " + price + ", Brand : " + brand + ", Rating : " + rating);
    }



}
