package com.company.products.repositories;

import org.springframework.data.repository.CrudRepository;

import com.company.products.entities.Products;

public interface ProductsRepository extends CrudRepository<Products, Integer> {

}
