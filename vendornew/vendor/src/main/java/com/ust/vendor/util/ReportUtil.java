package com.ust.vendor.util;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface ReportUtil {
	void generatePieChart(String path, List<Object[]> data);
}
