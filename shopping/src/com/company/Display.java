package com.company;

import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Display {
  public void show(){
        var brand= new Brand();
        new Items("Shoe1",brand.ADIDAS,1900,4.2);
        var newItem = new Items();
        List<Items> items = List.of(
                new Items("Shoe 1",brand.NIKE,2010,3.8),
                new Items("Shoe 2",brand.PUMA,1900,4.2),
                new Items("Shoe 3",brand.ADIDAS,1500,4.9),
                new Items("Shoe 4",brand.BENETTON,1400,3.9),
                new Items("Shoe 5",brand.DENIM,2900,4.4),

                new Items("Laptop 1",brand.APPLE,29000,4.6),
                new Items("Laptop 2",brand.HP,13000,4.4),
                new Items("Laptop 3",brand.DELL,25000,3.1),
                new Items("Laptop 4",brand.LENOVO,17000,3.8),
                new Items("Laptop 5",brand.LENOVO,14000,3.3),

                new Items("Shirt 1",brand.LOUIS_PHILLIPE,2900,4.2),
                new Items("Shirt 2",brand.PARK_AVENUE,2900,3.8),
                new Items("Shirt 3",brand.PETER_ENGLAND,1900,4.5),
                new Items("Shirt 4",brand.VAN_HEUSAN,3400,3.4),
                new Items("Shirt 5",brand.LOUIS_PHILLIPE,1890,4.1)

        );
      Predicate<Items> isHighRated = m -> m.getRating() >= 1;
      System.out.println("Products above Rs1900");
      long num=items.stream().filter(m->m.getPrice()>2500).collect(Collectors.counting());
      System.out.println("Number of products available"+":"+num);
      items.stream().filter(m->m.getPrice()>2500).forEach(m-> System.out.println(m.getTitle() + " "+m.getBrand()));

      var maxRating=items.stream().max(Comparator.comparing(Items::getRating))
              .get();
      System.out.println("Maximum rated product is "+ maxRating.getTitle()+"-"+maxRating.getBrand());
      var minRating=items.stream().min(Comparator.comparing(Items::getRating)).get();
      System.out.println("Minimum rated product is "+ minRating.getTitle()+"-"+minRating.getBrand());

      var link =  items.stream().collect(Collectors.toMap(m -> m.getTitle(), m -> m.getPrice()));
      System.out.println(link);

      var highRated = items.stream().allMatch(isHighRated);
      System.out.println(highRated);

      System.out.println("Brands Available Here");
      items.stream().map(Items::getBrand).distinct().forEach(System.out::println);








  }
}
