package com.ust.vendor.controller;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ust.vendor.repos.VendorRepository;
import com.ust.vendor.entities.Vendor;
import com.ust.vendor.service.VendorService;
import com.ust.vendor.util.EmailUtil;
import com.ust.vendor.util.ReportUtil;

@ComponentScan({"com.ust.vendor"})
@Controller
public class VendorController {
	
	@Autowired
	VendorService service;
	
	@Autowired
	VendorRepository repository;
	
	@Autowired
	EmailUtil emailUtil;
	
	@Autowired
	ReportUtil reportUtil;
	
	@Autowired
	ServletContext sc;
	
	@RequestMapping("/showAdd")
	public String showcreate() {
		return "addVendor";
	}
	
	@RequestMapping("/addVendor")
	public String addVendor(@ModelAttribute("vendor") Vendor vendor, ModelMap modalMap) {
		Vendor vendorSaved = service.addVendor(vendor);
		String msg = "Location saved with id :" + vendorSaved.getId();
		modalMap.addAttribute("msg",msg);
		emailUtil.sendEmail("newtempemail98@gmail.com", "Added", "Vendoradded successfully");
		return "addVendor";
	}
	
	@RequestMapping("/displayVendors")
	public  String displayVendors(ModelMap modelMap) {
		List<Vendor> vendors = service.getAllVendors();
		modelMap.addAttribute("vendors",vendors);
		return "showVendors";
	}
	
	@RequestMapping("/deleteVendor")
	public  String deleteVendor(@RequestParam("id") int id, ModelMap modelMap) {
		Vendor vendor = service.getVendor(id);
		vendor.setId(id);
		service.deleteVendor(vendor);
		List<Vendor> vendors = service.getAllVendors();
		modelMap.addAttribute("vendors",vendors);
		return "showVendors";
	}
	
	@RequestMapping("/showUpdate")
	public  String showUpdate(@RequestParam("id") int id, ModelMap modelMap) {
		Vendor vendor = service.getVendor(id);
		modelMap.addAttribute("vendor",vendor);
		return "showUpdate";
	}
	
	@RequestMapping("/updateVendor")
	public  String updateVendor(@ModelAttribute("location") Vendor vendor, ModelMap modelMap) {
		service.updateVendor(vendor);
		List<Vendor> vendors = service.getAllVendors();
		modelMap.addAttribute("vendors",vendors);
		return "showVendors";
	}
	
	@RequestMapping("/generateReport")
	public String generateReport() {
		String path = sc.getRealPath("/");
		List<Object[]> data = repository.findTypeAndTypeCount();
		reportUtil.generatePieChart(path, data);
		return "report";

	}
	
}

