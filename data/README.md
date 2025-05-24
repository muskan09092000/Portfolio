# Data Documentation

## Data Sources
This project utilizes data from the U.S. Energy Information Administration (EIA), accessed through their various data browsers and APIs:

1. **Total Energy Data**
   - Source: [EIA Total Energy Browser](https://www.eia.gov/opendata/browser/total-energy)
   - Content: Comprehensive energy consumption data across all sectors
   - Time Range: Monthly and annual data
   - Key Metrics: BTU consumption, energy source distribution

2. **Renewable Energy Data**
   - Source: [EIA Renewable Data](https://www.eia.gov/renewable/data.php#summary)
   - Content: Renewable energy generation and consumption
   - Metrics: Solar, wind, hydroelectric, biomass data
   - Geographic Granularity: State-level data

3. **CO2 Emissions Data**
   - Source: [EIA CO2 Emissions Browser](https://www.eia.gov/opendata/browser/co2-emissions/co2-emissions-and-carbon-coefficients)
   - Content: Carbon dioxide emissions by state and source
   - Metrics: Emissions by fuel type, sector-specific emissions

4. **State Energy Data**
   - Source: [State Energy Data System (SEDS)](https://www.eia.gov/state/seds/seds-data-complete.php)
   - Content: Comprehensive state-level energy statistics
   - Metrics: Consumption, production, prices, expenditures

## Data Structure
The analysis primarily worked with the following data points:
- Energy consumption by state and sector
- Renewable energy adoption metrics
- Environmental impact indicators
- Economic correlations

## Data Processing
1. **Data Extraction**
   - Used EIA API endpoints
   - Downloaded structured CSV files
   - Accessed through data browsers

2. **Data Cleaning**
   - Standardized units and measurements
   - Handled missing values
   - Normalized state names and codes

3. **Data Integration**
   - Combined multiple data sources
   - Created unified analysis datasets
   - Established common keys for joining

## Note
Due to the size of the raw data files, they are not included in this repository. All data can be accessed directly through the EIA websites and APIs listed above. 