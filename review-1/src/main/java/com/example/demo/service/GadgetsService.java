package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Gadgets;
import com.example.demo.repository.GadgetsRepository;

@Service
public class GadgetsService {
	@Autowired
	GadgetsRepository repository;
	
	public String addGadgets(Gadgets gadgets) {
		repository.save(gadgets);
		return "Added";
	}
	
	public List<Gadgets> getGadgets(){
		return repository.findAll();
	}
	
	public Optional<Gadgets> getGadgetsById(int id){
		return repository.findById(id);
	}
	
	public Gadgets updateGadgetsById(Gadgets gadgets) {
		repository.save(gadgets);
		return gadgets;
	}
	
	public String deleteGadgetsById(int id) {
		repository.deleteById(id);
		return "Deleted";
	}
	
	public List<Gadgets> getGadgetsSorted(String field){
		return repository.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	
	public List<Gadgets> getGadgetsWithPagination(int offset,int pageSize){
		Page<Gadgets> gadgets=repository.findAll(PageRequest.of(offset, pageSize));
		return gadgets.getContent();
	}
	
	public List<Gadgets> getGadgetsWithPaginationAndSorting( int offset, int pageSize,String field){
		Page<Gadgets> gadgets=repository.findAll(PageRequest.of(offset, pageSize,Sort.by(field)));
		return gadgets.getContent();
	}

}
