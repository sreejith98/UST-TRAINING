package com.ust.vendor.service;

import java.util.List;

import com.ust.vendor.entities.Vendor;
import com.ust.vendor.repos.VendorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VendorServiceImp implements VendorService {

	@Autowired
	private VendorRepository repository;
	
	@Override
	public Vendor addVendor(Vendor vendor) {
		// TODO Auto-generated method stub
		return repository.save(vendor);
	}

	@Override
	public Vendor updateVendor(Vendor vendor) {
		// TODO Auto-generated method stub
		return repository.save(vendor);
	}

	@Override
	public void deleteVendor(Vendor vendor) {
		// TODO Auto-generated method stub
		repository.delete(vendor);
	}	

	@Override
	public Vendor getVendor(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id).get();
	}

	@Override
	public List<Vendor> getAllVendors() {
		// TODO Auto-generated method stub
		return (List<Vendor>)repository.findAll();
	}
	
	public VendorRepository getRepository() {
		return repository;
	}

	public void setRepository(VendorRepository repository) {
		this.repository = repository;
	}

}
