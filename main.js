
  
  var images = [
    "https://www.google.com/search?q=father+cartoon+picture&sxsrf=ALeKk02XM7S-Ambm0MylMSC18X9Dwqrpvw:1617011358618&tbm=isch&source=iu&ictx=1&fir=Oo-I9gMWcSLBTM%252CIWq0pb0NjySm5M%252C_&vet=1&usg=AI4_-kRi1g9PHhGL-E0Umrpkn6XgEuGkug&sa=X&ved=2ahUKEwj44ILdnNXvAhUz63MBHVFlD20Q9QF6BAgXEAE#imgrc=Oo-I9gMWcSLBTM",
    "https://www.google.com/search?q=mother+cartoon+characters&sxsrf=ALeKk01qlQAFNFLRBT-4p60TH3f9Ybb3aw:1617011471569&tbm=isch&source=iu&ictx=1&fir=AdjsJnNVldcKfM%252CpVfUjMTZ7LFYsM%252C_&vet=1&usg=AI4_-kQ2YbgEPUXq0iYE_QsLic7N9TdfXw&sa=X&ved=2ahUKEwi3zvCSndXvAhVzmeYKHSUDAZEQ9QF6BAgXEAE#imgrc=AdjsJnNVldcKfM",
    "https://www.google.com/search?q=boy+cartoon+character&sxsrf=ALeKk03xqGiR7NhtvkNT9DngN5z3ZWfZLA:1617011522984&tbm=isch&source=iu&ictx=1&fir=7-TNo0uRmJzwSM%252CZiRRkyLnUslGmM%252C_&vet=1&usg=AI4_-kRXOc3LcW7aG4cO1rc_WrfyM5DeLg&sa=X&ved=2ahUKEwiAg7OrndXvAhXA8HMBHVEWBbEQ9QF6BAgYEAE#imgrc=7-TNo0uRmJzwSM",
    "https://www.google.com/search?q=girl+cartoon+character&sxsrf=ALeKk02kwdHh-RKWJ4el1mQ-PX7tabP_lA:1617011580569&tbm=isch&source=iu&ictx=1&fir=_ugAMDuvZbqhzM%252C2oGFCGAy7i7QlM%252C_&vet=1&usg=AI4_-kTlP-_poKadu6RBLAVWknk3_arIzw&sa=X&ved=2ahUKEwjP0e3GndXvAhWH63MBHboOCb0Q9QF6BAgWEAE#imgrc=_ugAMDuvZbqhzM"
  ];
  
  var i = 0;
  function nextslide() {
    document.getElementById("album").src = images[i];
    i++;
  }