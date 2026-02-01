<?php
// live_stats.php

// 1. Simulate a network delay (1 second) to show AJAX working
sleep(1);

// 2. Generate Random "Live" Stats (Simulating a database)
$kills = rand(10, 25);
$alive = rand(5, 50);
$damage = rand(500, 2000);

// 3. Package the data into an array
$matchData = [
    "player" => "S8UL_Mortal",
    "team" => "Team Soul",
    "kills" => $kills,
    "alive" => $alive,
    "damage" => $damage,
    "timestamp" => date("H:i:s")
];

// 4. Send it back to the browser as JSON (JavaScript Object Notation)
header('Content-Type: application/json');
echo json_encode($matchData);
?>
