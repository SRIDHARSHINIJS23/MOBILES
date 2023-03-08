package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Gadgets;
import com.example.demo.service.GadgetsService;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class GadgetsController {
	@Autowired
	GadgetsService service;
	
	@PostMapping("/gadgets")
	public String create(@RequestBody Gadgets gadgets) {
		return service.addGadgets(gadgets);
	}
	
	@GetMapping("/gadgets/sort/{field}")
	public List<Gadgets> getSorted(@PathVariable String field){
		return service.getGadgetsSorted(field);
	}
	
	@GetMapping("/gadgets/{offset}/{pagesize}")
	public List<Gadgets> getWithPagination(@PathVariable int offset,@PathVariable int pagesize){
		return service.getGadgetsWithPagination(offset,pagesize);
	}
	
	@GetMapping("/gadgets/{offset}/{pagesize}/{field}")
	public List<Gadgets> getWithSortedPagination(@PathVariable int offset,@PathVariable int pagesize,@PathVariable String field){
		return service.getGadgetsWithPaginationAndSorting(offset, pagesize, field);
	}
	
	@GetMapping("/gadgets/get")
	public List<Gadgets> get(){
		return service.getGadgets();
	}
	
	@GetMapping("/gadgets/{id}")
	public Optional<Gadgets> getById(@PathVariable int id){
		return service.getGadgetsById(id);
	}
	
	@DeleteMapping("/gadgets/delete/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteGadgetsById(id);
	}
	
	@PutMapping("/gadgets/put")
	public Gadgets update(@RequestBody Gadgets gadgets ) {
		return service.updateGadgetsById(gadgets);
	}

}
