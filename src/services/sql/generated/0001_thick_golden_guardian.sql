-- Custom SQL migration file, put your code below! --
-- Inserting default categories
INSERT INTO category (name, description, color, icon_name, is_default) VALUES 
('Housing', 'Rent, mortgage, utilities', '#D63031', 'home', true),
('Transportation', 'Gas, public transit, car payments', '#00B894', 'car', true),
('Food & Dining', 'Groceries, restaurants', '#0984E3', 'utensils', true),
('Entertainment & Recreation', 'Movies, hobbies, activities', '#00A085', 'gamepad-2', true),
('Healthcare & Personal Care', 'Medical, pharmacy, personal care', '#E17055', 'heart', true),
('Savings & Investments', 'Retirement, investments, savings', '#A29BFE', 'piggy-bank', true),
('Debt Payments', 'Credit cards, loans', '#E17055', 'credit-card', true),
('Emergency Fund', 'Emergency savings', '#E84393', 'shield', true),
('Miscellaneous', 'Other expenses', '#636E72', 'more-horizontal', true);
