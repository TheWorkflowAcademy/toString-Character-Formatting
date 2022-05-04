revenue = 1000000.50;
info "With decimals: " + revenue.toString("$#,000.00");
info "Without decimals: " + revenue.toString("$#,000");

percentage = 20;
percentage = percentage / 100;
info percentage.toString("0%");