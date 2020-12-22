package com.company.products;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.company.products.entities.Products;
import com.company.products.repositories.ProductsRepository;


@SpringBootTest
class EcommerceApplicationTests {

	@Autowired
	private ProductsRepository productsRepository;
	
	@Test
	public void testCreateProduct() {
		Products product = new Products();
		product.setTitle("Fjallraven");
		product.setCategory("men clothing");
		product.setDescription("Your perfect pack for everyday use");
		product.setPrice(109.95);
		product.setImage("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
		productsRepository.save(product);
	}
	
	@Test
	public void testFindProductById() {
		Products product = productsRepository.findById(6).get();
		System.out.println(product);
	}

	@Test
	public void testUpdateProductById() {
		Products product = productsRepository.findById(6).get();
		product.setPrice(100.60);
		productsRepository.save(product);
		System.out.println(product);
	}
	
	@Test
	public void testDeleteProductById() {
		Products product = productsRepository.findById(7).get();
		productsRepository.delete(product);
	}

}
