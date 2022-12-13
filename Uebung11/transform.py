import uvicorn
from fastapi import FastAPI, Response

from pyproj import Transformer

transformer_wgs84tolv95 = Transformer.from_crs("epsg:4326", "epsg:2056") 
transformer_lv95towgs84 = Transformer.from_crs("epsg:2056", "epsg:4326") 

app = FastAPI()

@app.get("/transform/wgs84lv95")
async def transformation(lng: float, lat: float):
    r1 = transformer_wgs84tolv95.transform(lng, lat)
    geojson = f"""{{"type": "Feature","geometry": {{"type": "MultiPoint","coordinates": {r1}}},"properties": {{"about": "Geodätische Linie"}}}}"""
    return Response(content=geojson)

@app.get("/transform/lv95wgs84")
async def transformation(lng: float, lat: float):
    r2 = transformer_lv95towgs84.transform(lng, lat)
    geojson2 = f"""{{"type": "Feature","geometry": {{"type": "MultiPoint","coordinates": {r2}}},"properties": {{"about": "Geodätische Linie"}}}}"""
    return Response(content=geojson2)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8001)