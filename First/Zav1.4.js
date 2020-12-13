function coffee()
    {
    console.log("В кав'ярні Влад, Назар, Gorn, Михайло, Дмитро, Олександр, Юрій, В'ячеслав")
    var names = Array("Влад", "Назар", "Gorn", "Михайло", "Дмитро", "Олександр", "Юрій", "В'ячеслав");
    var name = names[Math.floor(Math.random()*names.length)];
    console.log("За каву платитиме:");
    return name
    }
