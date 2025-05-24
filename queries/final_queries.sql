-- SQL California Retail Analytics
-- Author: Muskan Aggarwal
-- Date: October 4, 2024

-- Research Question 1: Counties lacking clothing stores with high potential
SELECT 
    c.county_name,
    c.high_income_population,
    COUNT(s.store_id) as store_count
FROM counties c
LEFT JOIN stores s ON c.county_id = s.county_id
WHERE s.store_id IS NULL
GROUP BY c.county_name, c.high_income_population
ORDER BY c.high_income_population DESC;

-- Research Question 2: Consumer behavior patterns
SELECT 
    c.county_name,
    AVG(v.daily_visits) as avg_daily_visits,
    COUNT(s.store_id) / c.population as stores_per_capita,
    v.raw_visitor_count / c.population as visitors_per_capita
FROM counties c
JOIN stores s ON c.county_id = s.county_id
JOIN visits v ON s.store_id = v.store_id
GROUP BY c.county_name, c.population
ORDER BY stores_per_capita DESC;

-- Research Question 3: Specialized store opportunities
SELECT 
    c.county_name,
    COUNT(CASE WHEN s.store_type = 'Children' THEN 1 END) / c.child_population as childrens_stores_per_capita,
    COUNT(CASE WHEN s.store_type = 'Women' THEN 1 END) / c.female_population as womens_stores_per_capita,
    COUNT(CASE WHEN s.store_type = 'Men' THEN 1 END) / c.male_population as mens_stores_per_capita
FROM counties c
LEFT JOIN stores s ON c.county_id = s.county_id
GROUP BY c.county_name, c.child_population, c.female_population, c.male_population
ORDER BY childrens_stores_per_capita; 