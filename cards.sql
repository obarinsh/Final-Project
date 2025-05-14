-- CREATE TABLE Users (
-- id SERIAL PRIMARY KEY,
-- username VARCHAR(50) NOT NULL,
-- email VARCHAR(100) UNIQUE NOT NULL,
-- password_hash TEXT NOT NULL
-- );

-- SELECT * FROM Users;

-- CREATE TABLE categories (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL UNIQUE
-- );

-- CREATE TABLE questions (
--     id SERIAL PRIMARY KEY,
--     category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
--     text TEXT NOT NULL
-- );

-- INSERT INTO categories (name) VALUES
-- ('First Date'),
-- ('Family Evening'),
-- ('Romantic Conversation');

-- INSERT INTO questions (category_id, text) VALUES
-- (1, 'What’s your favorite childhood memory?'),
-- (1, 'Do you believe in love at first sight?'),
-- (1, 'What’s your dream travel destination?'),
-- (2, 'What’s the funniest family moment you remember?'),
-- (2, 'If our family had a motto, what would it be?'),
-- (3, 'What does romance mean to you?'),
-- (3, 'What’s the most romantic thing someone did for you?');

-- ALTER TABLE categories
-- ADD COLUMN description TEXT

-- UPDATE categories
-- SET topic = 'Friends and Fun'
-- WHERE id = 7;


-- INSERT INTO categories (name) VALUES
-- ('Before We Say “I Do”')

UPDATE categories
SET name = 'Real Talk: Teens & Parents',
description = 'Meaningful, fun, and sometimes surprising conversations between teens and parents. This deck is designed to help you understand each other better, share laughs, and build trust — one question at a time'
WHERE id = 8;


-- INSERT INTO questions (category_id, text) VALUES
-- (4, 'If we’re being honest, do we want to have a child or do we want to become parents? It’s not the same.'),
-- (4, 'How will we divide roles? Who will take parental leave? Who will provide financially and in what proportion?'),
-- (4, 'Whose help and support can we count on along the way? (Grandparents? Friends? Nannies?)'),
-- (4, 'How do we imagine our daily life when we become three? Who cooks, who gets up at night?'),
-- (4, 'What are our taboos in raising children? What’s most important to us?'),
-- (4, 'How will we meet each other’s needs for closeness at different stages of this journey?'),
-- (4, 'How should we prepare financially? How much should we save? How should we adjust income/expenses?'),
-- (4, 'What does being a good parent mean to each of us?'),
-- (4, 'What do we want to pass on, and what do we not want to repeat from our own childhoods?'),
-- (4, 'Are we ready for the unknown — emotional, physical, financial? What will help support us?'),
-- (4, 'What scares each of us about parenthood?'),
-- (4, 'What excites us about it?'),
-- (4, 'What will help keep warmth, support, and deep connection in our relationship at every stage?');

-- INSERT INTO questions (category_id, text) VALUES
-- (8, 'What’s the funniest thing we’ve ever done together?'),
-- (8, 'If you could teach me one trend or slang word, what would it be?'),
-- (8, 'If you could swap lives for a day, what’s the first thing you’d do?'),
-- (8, 'When was your first kiss?'),
-- (8, 'When do you feel most supported by me?'),
-- (8, 'What’s something silly we should try together just for fun?'),
-- (8, 'What’s something we can both improve on to have fewer conflicts?'),
-- (8, 'How can we build more trust with each other?'),
-- (8, 'What is your biggest fear?'),
-- (8, 'Imagine your perfect job, what is it? Explain in details'),
-- (8, 'How did you imagine your future when you were my age? What came true and whats not?'),
-- (8, 'What’s something we both get stressed about — and how can we handle it better together?'),
-- (8, 'At what age you first tried alcohol?')


-- UPDATE categories
-- SET topic = 'Family & Home'
-- WHERE id = 8;
SELECT * FROM categories;

-- INSERT INTO categories (name) VALUES
-- (' Self Reflection')

-- INSERT INTO questions (category_id, text) VALUES
-- (7, 'If we all had to replace our hands with random objects from the kitchen, what would you pick and why?'),
-- (7, 'You are now legally married to the last object you touched. How’s the honeymoon going?'),
-- (7, 'If you were arrested, what’s the most ridiculous thing we’d assume you got caught doing?'),
-- (7, 'You have to fight 100 duck-sized grandmas or 1 grandma-sized duck. Who do you pick — and what’s your weapon?'),
-- (7, 'If your laugh had a physical form, what would it look like and what sound would it make?'),
-- (7, 'Which friend would accidentally summon a demon during a Zoom call — and what’s their opening line?'),
-- (7, 'If you were a piñata, what would fall out of you when you break?'),
-- (7, 'Which two animals combined best represent your personality in a disaster?'),
-- (7, 'Everyone here has been cursed to swap bodies for a day. Who’s most likely to break the world in that time?'),
-- (7, 'If your brain sent out an automated “out of office” reply, what would it say right now?'),
-- (7, 'You have to pick a new alarm sound made by someone in this room. Who is it and what sound do they make?'),
-- (7, 'You’re a wizard, but your only spell is mildly annoying. What does it do?'),
-- (7, 'If someone here had an evil twin, who would it be and what petty chaos would they cause?'),
-- (7, 'You can only speak in movie quotes for the next week. What’s your go-to quote?'),
-- (7, 'Which of us would survive the longest in an IKEA — and what section would they live in?');