import uvicorn
from fastapi import FastAPI

app = FastAPI()

d = {}

file = open("PLZO_CSV_LV95.csv", encoding="utf-8")
next(file)

for line in file:
    Daten = line.strip().split(";")
    ortschaft = Daten[0]
    plz = Daten[1]
    zusatzziffer = Daten[2]
    gemeindename = Daten[3]
    BFSNr = Daten[4]
    kantonskürz = Daten[5]
    East = Daten[6]
    Nord = Daten[7]
    sprache = Daten[8]

    d[gemeindename] = {"ortschaft": ortschaft, "plz": plz, "zusatzziffer": zusatzziffer, 
                        "BFSNr": BFSNr, "kantonskürz": kantonskürz, "East": East,
                        "Nord": Nord, "sprache": sprache}

file.close()

@app.get("/gemeindename")
async def gem(gemeindename: str):
    if gemeindename in d:
        return d[gemeindename]
    else:
        return {"ERROR": "not found"}
    
if __name__ == "__main__":

    uvicorn.run(app, host="127.0.0.1", port=8000)
