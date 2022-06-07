function find(cost, players)
{
    for (let i in players)
    {
        if (players[i] == cost)
        {
            return i;
        }
    }
}

export{find};