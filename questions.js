const M7_QUESTIONS = [
  {
    id: "m7_1",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Why children are more vulnerable to dehydration",
    stem: "A nurse is teaching a group of nursing students about pediatric dehydration. A student asks why a 3-month-old infant becomes dehydrated more rapidly than a 10-year-old child with the same amount of fluid loss. Which explanation by the nurse is MOST accurate?",
    options: [
      "A. Infants have a lower metabolic rate and produce less insensible fluid loss per kilogram.",
      "B. Infants have immature kidneys that cannot concentrate urine effectively, and their total body water makes up approximately 80% of body weight.",
      "C. Infants have a smaller body surface area relative to weight, reducing evaporative losses.",
      "D. Infants have a higher capacity to self-regulate fluid intake and can signal thirst more reliably."
    ],
    correct: ["B"],
    rationale: "Infants have immature kidneys that cannot concentrate urine or conserve water effectively, and total body water (TBW) accounts for approximately 80% of body weight in infants compared to 60% in adults — meaning a proportionally larger fluid compartment is at risk during illness. Option A is wrong because infants have a HIGHER metabolic rate, increasing insensible losses. Option C is wrong because infants have a GREATER body surface area relative to weight, increasing evaporative losses. Option D is wrong because infants are entirely dependent on caregivers for fluid intake and cannot self-regulate.",
    trap: "Students often confuse 'higher metabolic rate' with 'more resilient' — in infants, higher metabolic rate means MORE fluid loss per kilogram, not less."
  },
  {
    id: "m7_2",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Most common cause and pathogen of dehydration",
    stem: "A 9-month-old infant is brought to the emergency department with a 3-day history of diarrhea and vomiting. The mother reports the child attends daycare. The nurse recognizes that the MOST likely pathogen responsible for this presentation is:",
    options: [
      "A. Escherichia coli",
      "B. Rotavirus",
      "C. Clostridium difficile",
      "D. Salmonella"
    ],
    correct: ["B"],
    rationale: "Rotavirus is the most common pathogen causing acute gastroenteritis leading to dehydration in infants and young children; it is the most serious diarrheal illness in this age group and is now vaccine-preventable. The daycare setting is a classic risk factor for rotavirus spread. E. coli is the most common cause of UTI, not acute gastroenteritis in infants. C. difficile is associated with antibiotic use and healthcare settings. Salmonella is a food-borne pathogen but is not the most common pediatric gastroenteritis pathogen.",
    trap: "E. coli is the most common cause of UTI — students confuse it with the most common gastroenteritis pathogen in children, which is Rotavirus."
  },
  {
    id: "m7_3",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Dehydration type — hypertonic (hypernatremic)",
    stem: "A nurse assesses a 7-month-old infant with a 2-day history of watery diarrhea and decreased oral intake. The infant has been given diluted formula and water at home. Serum sodium is 162 mEq/L. The nurse anticipates which clinical finding MOST specific to this type of dehydration?",
    options: [
      "A. Puffy, boggy skin turgor that feels normal or doughy to palpation",
      "B. Brisk capillary refill with normal mucous membranes",
      "C. Generalized edema and periorbital swelling",
      "D. Moist mucous membranes with sunken fontanelle"
    ],
    correct: ["A"],
    rationale: "With a sodium of 162 mEq/L this is hypertonic (hypernatremic) dehydration. The extracellular fluid is hyperosmolar, pulling water OUT of cells — including skin cells — producing doughy or normal-feeling skin turgor that is paradoxically misleading despite severe dehydration. This is the hallmark finding. Option B describes a well-hydrated or mildly dehydrated child. Option C describes fluid-shifting INTO interstitial spaces as in hypo-oncotic states (nephrotic syndrome), not hypertonic dehydration. Option D is contradictory — moist membranes and a sunken fontanelle do not coexist in this presentation.",
    trap: "Students expect dehydrated infants to have poor skin turgor — in hypertonic dehydration the doughy skin can appear normal, masking severity."
  },
  {
    id: "m7_4",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Dehydration type — hypotonic (hyponatremic)",
    stem: "A 14-month-old toddler presents with profuse diarrhea for 48 hours. Parents report the child has been given plain water and homemade broth. Serum sodium returns at 122 mEq/L. The nurse is MOST concerned about which complication?",
    options: [
      "A. Cardiovascular collapse from greatest shock risk",
      "B. Cerebral edema from fluid shifting into brain cells",
      "C. Cell shrinkage and high-pitched cry from neuronal dehydration",
      "D. Doughy skin from extracellular hyperosmolarity"
    ],
    correct: ["B"],
    rationale: "Hypotonic (hyponatremic) dehydration occurs when electrolyte losses exceed water losses — giving hypoosmolar ECF. Free water shifts INTO cells, including brain cells, risking cerebral edema, seizures, and altered LOC. Option A describes isotonic dehydration, the type with greatest shock risk due to equal fluid loss. Option C describes hypertonic dehydration (cell shrinkage, high-pitched cry). Option D describes hypertonic dehydration (doughy skin from extracellular hyperosmolarity). Using plain water at home as replacement dilutes remaining sodium further — a classic hypotonic dehydration history.",
    trap: "Giving plain water to a dehydrated infant causes hyponatremia (hypo-osmolar ECF) which shifts water INTO cells — not out. Students confuse direction of fluid shift with hyper- vs. hypo-tonic types."
  },
  {
    id: "m7_5",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Dehydration type — isotonic shock risk",
    stem: "A nurse is caring for three pediatric patients with dehydration. Patient A has serum Na 138 mEq/L. Patient B has serum Na 125 mEq/L. Patient C has serum Na 158 mEq/L. The nurse correctly identifies that which patient is at the GREATEST risk for hypovolemic shock?",
    options: [
      "A. Patient A — isotonic dehydration",
      "B. Patient B — hypotonic dehydration",
      "C. Patient C — hypertonic dehydration",
      "D. All patients carry equivalent shock risk"
    ],
    correct: ["A"],
    rationale: "Isotonic dehydration (Na 130–150) is the MOST common type of dehydration and carries the greatest risk for hypovolemic shock because fluid is lost proportionally from both water and electrolytes — no compensatory fluid shift occurs to protect the intravascular compartment. In hypotonic dehydration, low ECF osmolality shifts water INTO cells, partially supporting intracellular volume but worsening neurological risk. In hypertonic dehydration, the high ECF osmolality draws water OUT of cells, temporarily supporting the vascular space. Isotonic loss does neither, leaving the vascular compartment most depleted.",
    trap: "Students assume hypertonic or hypotonic dehydration must be more dangerous — isotonic is actually most common and highest shock risk because there is no compensatory fluid redistribution."
  },
  {
    id: "m7_6",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Dehydration severity assessment — weight",
    stem: "A 10-kg infant is brought to the clinic. The mother reports the infant weighed 10 kg at the last visit 2 days ago. Today's weight is 8.5 kg. The nurse correctly calculates the infant's estimated fluid deficit as:",
    options: [
      "A. 500 mL — 5% body weight loss",
      "B. 1,500 mL — 15% body weight loss",
      "C. 1,500 mL — consistent with moderate dehydration",
      "D. 750 mL — 7.5% body weight loss"
    ],
    correct: ["B"],
    rationale: "Weight is the best measure of acute fluid loss in children: 1 kg lost = 1 L fluid deficit. This infant lost 1.5 kg, representing 1,500 mL and 15% body weight loss — consistent with severe dehydration in an infant (>10%). Option A calculates a 500 mL loss, which would be only 0.5 kg lost. Option C correctly identifies 1,500 mL but misclassifies severity as moderate — 15% in an infant exceeds the severe threshold of >10%. Option D calculates 750 mL, which would represent only 0.75 kg lost.",
    trap: "Students may calculate the percentage correctly but misclassify severity by using the older-child thresholds (>6–9%) rather than infant thresholds (>10%)."
  },
  {
    id: "m7_7",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Dehydration severity — clinical sign progression",
    stem: "A nurse is triaging two infants in the ED. Infant A has dry mucous membranes, decreased tears, and a heart rate of 162 bpm. Infant B has the same findings plus a blood pressure of 68/40 mmHg, capillary refill of 4 seconds, and mottled skin. The nurse correctly identifies Infant B as having which level of dehydration?",
    options: [
      "A. Mild dehydration — HR elevation is an expected finding",
      "B. Moderate dehydration — the sunken fontanelle would need to be confirmed",
      "C. Severe dehydration — hypotension and capillary refill >3 seconds indicate circulatory compromise",
      "D. Moderate dehydration — mottled skin is a normal finding in infants"
    ],
    correct: ["C"],
    rationale: "Severe dehydration is characterized by hypotension, capillary refill >3 seconds, mottled or gray skin, markedly decreased urine output, and altered LOC — all signs of circulatory failure and impending shock. Infant A's presentation is consistent with moderate dehydration (dry membranes, tachycardia, decreased tears). Option A is incorrect because Infant B's presentation exceeds mild dehydration by far. Option B incorrectly classifies as moderate — hypotension is not a moderate finding; it marks severe. Option D is wrong because mottled skin in a dehydrated infant signals poor perfusion, not a normal variant.",
    trap: "Students may stop at tachycardia and classify as moderate, missing that hypotension and mottling are severe/shock indicators requiring immediate IV intervention."
  },
  {
    id: "m7_8",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Bicarbonate as dehydration severity marker",
    stem: "A 2-year-old with 3 days of diarrhea has a serum bicarbonate of 11 mEq/L. The nurse interprets this finding as indicating:",
    options: [
      "A. Metabolic alkalosis from vomiting — bicarbonate is elevated above normal",
      "B. Moderate-to-severe dehydration with metabolic acidosis — IV fluids are likely needed",
      "C. Normal bicarbonate level for a 2-year-old — no intervention required",
      "D. Mild dehydration — bicarbonate below 17 mEq/L is an expected finding in diarrhea"
    ],
    correct: ["B"],
    rationale: "A serum bicarbonate of 11 mEq/L is below the threshold of 13 mEq/L, which indicates likely need for IV fluid therapy. Diarrhea causes loss of bicarbonate in stool, resulting in metabolic acidosis. A bicarbonate <17 mEq/L indicates moderate-to-severe dehydration; <13 mEq/L indicates IV fluids are likely needed. Option A is wrong because diarrhea causes acidosis (not alkalosis) — vomiting causes alkalosis through HCl loss. Option C is wrong because normal bicarbonate in children is 21–28 mEq/L (infants 16–24). Option D misclassifies severity — bicarb of 11 is below the <13 threshold, which is not expected or acceptable.",
    trap: "Students confuse vomiting (alkalosis, bicarb rises) with diarrhea (acidosis, bicarb falls) — diarrhea specifically drives bicarb down."
  },
  {
    id: "m7_9",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "RAPID assessment — BP determines timing",
    stem: "A nurse assesses a 10-month-old infant with moderate dehydration. The infant is lethargic, has dry mucous membranes, decreased urine output, and capillary refill of 3 seconds. Blood pressure is 90/60 mmHg (within normal limits for age). The nurse prepares a normal saline bolus. Which infusion time is CORRECT?",
    options: [
      "A. 5–10 minutes — the infant's altered mental status triggers the faster bolus rate",
      "B. 5–20 minutes — BP is stable, making this a RAPID-negative assessment",
      "C. 20–30 minutes — standard ATI bolus time for all pediatric patients",
      "D. 10–20 minutes — cardiac history triggers the modified bolus rate"
    ],
    correct: ["B"],
    rationale: "The RAPID mnemonic (Rapid HR, Altered color/cap refill, Peeing nonexistent, Inability to engage, Decreased BP) uses blood pressure ALONE to determine bolus timing. With a normal BP (RAPID-negative), the bolus is given over 5–20 minutes even if other RAPID criteria are met. Option A is a confirmed exam trap — lethargy does NOT trigger 5–10 minutes; only hypotension does. Option C is wrong because Professor Rascón's standard is 5–10 or 5–20 min, not 20–30. Option D describes the cardiac/renal exception at 5–10 mL/kg over 10–20 minutes, but only for patients with known cardiac or renal history.",
    trap: "Lethargy looks urgent and students assume it demands the fastest bolus rate — but BP is the only RAPID criterion that determines 5–10 versus 5–20 minutes."
  },
  {
    id: "m7_10",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "RAPID assessment — hypotension triggers faster bolus",
    stem: "A 3-year-old arrives in the ED with severe dehydration. Assessment findings include: HR 178 bpm, capillary refill 5 seconds, no urine output in 8 hours, unresponsive to voice, and blood pressure 62/38 mmHg. The nurse prepares a 20 mL/kg NS bolus. The CORRECT infusion time is:",
    options: [
      "A. 5–20 minutes — this is a RAPID-negative patient",
      "B. 20–30 minutes — standard bolus time",
      "C. 5–10 minutes — hypotension is present, making this a RAPID-positive patient",
      "D. 10–20 minutes — this applies because the patient has altered mental status"
    ],
    correct: ["C"],
    rationale: "With a BP of 62/38 (hypotension), the RAPID assessment is POSITIVE — meaning the patient is hemodynamically unstable. A RAPID-positive patient receives the 20 mL/kg NS bolus over 5–10 minutes to rapidly restore perfusion. All other RAPID criteria (HR, cap refill, UO, LOC) support severity but do not change timing — only the D criterion (Decreased BP) determines whether 5–10 or 5–20 minutes is used. Option A is wrong because this is RAPID-positive, not negative. Option B uses an outdated time interval. Option D is wrong because altered mental status alone does not trigger 5–10 minutes.",
    trap: "With all RAPID criteria present and positive, students may believe mental status is the determining factor — only BP status determines infusion timing."
  },
  {
    id: "m7_11",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "ORT — first-line for mild-moderate dehydration",
    stem: "A 2-year-old with moderate dehydration from gastroenteritis is alert, can drink, and has no vomiting in the past 2 hours. Serum bicarbonate is 18 mEq/L. The nurse's PRIORITY intervention is:",
    options: [
      "A. Insert a peripheral IV and begin NS 20 mL/kg bolus",
      "B. Initiate oral rehydration therapy with WHO/UNICEF ORS, 100 mL/kg over 4–6 hours",
      "C. Offer Gatorade or apple juice, 4 oz every 30 minutes",
      "D. Begin maintenance IV fluids at the calculated Holliday-Segar rate"
    ],
    correct: ["B"],
    rationale: "ORT is the first-line intervention for mild to moderate dehydration in a child who is alert and can drink. The WHO/UNICEF ORS (Na 75, glucose 75) is the correct solution; for moderate dehydration, 100 mL/kg over 4–6 hours is recommended. Option A is incorrect — IV fluids are indicated for severe dehydration, inability to tolerate ORT, or altered LOC; this child has none of those. Option C is wrong — Gatorade, apple juice, and sports drinks contain inappropriate electrolyte ratios and high sugar content and are explicitly contraindicated for dehydration in children. Option D skips the first-line step and jumps to maintenance IVF without bolus indication.",
    trap: "Because the child has moderate dehydration, students assume an IV must be started — but ORT is first-line as long as the child can drink and has no altered LOC or vomiting."
  },
  {
    id: "m7_12",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "ORT — inappropriate fluids",
    stem: "A parent is teaching back home management of mild dehydration in their 18-month-old. The nurse determines that FURTHER TEACHING IS NEEDED when the parent states:",
    options: [
      "A. 'I will offer small sips of Pedialyte every few minutes rather than large amounts at once.'",
      "B. 'I will continue age-appropriate foods as my child tolerates them.'",
      "C. 'I will give my child diluted apple juice because it is gentler on the stomach than Pedialyte.'",
      "D. 'I will watch for fewer wet diapers as a sign that dehydration is worsening.'"
    ],
    correct: ["C"],
    rationale: "Apple juice — even diluted — is contraindicated for rehydration because it has inappropriate electrolyte composition and high osmolarity from fructose and sorbitol, which can worsen diarrhea. The correct ORS is WHO/UNICEF solution or commercial equivalents like Pedialyte. Option A reflects correct teaching — small frequent sips prevent vomiting and optimize absorption. Option B reflects current guidelines — the BRAT diet is not recommended; age-appropriate diet should resume as tolerated. Option D is correct knowledge — decreased wet diapers is a sign of worsening dehydration requiring reassessment.",
    trap: "Diluted juice sounds reasonable to parents and students — but any fruit juice (high sugar, wrong electrolytes) is contraindicated even when diluted."
  },
  {
    id: "m7_13",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "IVF — indications over ORT",
    stem: "A nurse is caring for a 6-month-old infant with gastroenteritis. Which assessment finding is the PRIORITY indicator for IV fluid therapy over oral rehydration?",
    options: [
      "A. Dry mucous membranes and absent tears",
      "B. Sunken anterior fontanelle",
      "C. Altered level of consciousness and inability to drink",
      "D. Heart rate of 148 bpm"
    ],
    correct: ["C"],
    rationale: "IV fluid therapy is indicated for severe dehydration, inability to tolerate ORT (persistent vomiting, refusal), altered LOC, or signs of shock. An infant who cannot drink due to altered LOC cannot receive ORT safely and requires IV access immediately. Options A and B (dry membranes, sunken fontanelle) indicate moderate dehydration but do not by themselves rule out ORT — the infant can still drink. Option D (tachycardia at 148 in a 6-month-old) is elevated but falls within a range that could indicate moderate dehydration without immediate IV mandate, as long as other RAPID criteria including BP are stable.",
    trap: "Sunken fontanelle and dry membranes look severe but do not automatically contraindicate ORT — inability to drink or altered LOC is the actual switch to IV."
  },
  {
    id: "m7_14",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "NS bolus — contraindication of D5W",
    stem: "A 4-year-old with severe dehydration arrives in the ED. The nurse is preparing IV fluids for initial resuscitation. The provider orders a bolus. Which fluid is CONTRAINDICATED during early bolus resuscitation?",
    options: [
      "A. 0.9% sodium chloride (normal saline)",
      "B. D5W (5% dextrose in water)",
      "C. Lactated Ringer's",
      "D. 0.9% NaCl with 20 mEq potassium"
    ],
    correct: ["B"],
    rationale: "D5W is contraindicated for emergency resuscitation bolus in dehydrated children. It contains no electrolytes and is essentially free water once dextrose is metabolized — it does not expand the intravascular compartment effectively and can cause hyponatremia. Normal saline (0.9% NaCl) is the standard bolus fluid. Option A is correct and is the preferred bolus fluid. Option C (Lactated Ringer's) is an acceptable isotonic crystalloid for resuscitation. Option D is contraindicated for a different reason — potassium is never added to rapid bolus fluids because it can cause cardiac arrhythmias; K+ replacement requires confirmed urine output first.",
    trap: "D5W has dextrose (sugar) which makes students think it provides energy and volume — but it is free water with no electrolytes and is contraindicated for resuscitation bolus."
  },
  {
    id: "m7_15",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Holliday-Segar maintenance fluid calculation",
    stem: "A nurse is calculating maintenance fluid requirements for a 25-kg child. Using the Holliday-Segar 100/50/20 method, what is the correct maintenance rate in mL/hr?",
    options: [
      "A. 52 mL/hr",
      "B. 67 mL/hr",
      "C. 83 mL/hr",
      "D. 104 mL/hr"
    ],
    correct: ["B"],
    rationale: "Using the 100/50/20 rule: First 10 kg × 100 = 1,000 mL; next 10 kg × 50 = 500 mL; remaining 5 kg × 20 = 100 mL. Total = 1,600 mL/day ÷ 24 hours = 66.7 mL/hr, rounded to 67 mL/hr. Option A (52 mL/hr) would equal 1,248 mL/day, which does not match the calculation. Option C (83 mL/hr) would equal 2,000 mL/day, applying 80 mL/kg incorrectly. Option D (104 mL/hr) would equal 2,500 mL/day, overstating the requirement.",
    trap: "Students often apply 100 mL/kg across all weight categories, giving 2,500 mL/day for a 25-kg child — the step-down rule (100/50/20) must be applied by weight tier."
  },
  {
    id: "m7_16",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Minimum urine output — infants",
    stem: "A nurse is monitoring a 6-kg infant post-bolus for dehydration. The last 4 hours produced 18 mL of urine. The nurse evaluates this output as:",
    options: [
      "A. Adequate — this exceeds the minimum output of 1 mL/kg/hr",
      "B. Inadequate — this falls below the minimum output of 1.5–2 mL/kg/hr for infants",
      "C. Adequate — the minimum UO for infants is 0.5 mL/kg/hr",
      "D. Borderline adequate — reassessment in 2 hours is sufficient"
    ],
    correct: ["B"],
    rationale: "The minimum urine output for infants and young children is 1.5–2 mL/kg/hr. For this 6-kg infant over 4 hours: minimum expected = 6 kg × 1.5 mL/kg/hr × 4 hours = 36 mL. The infant produced only 18 mL — well below the minimum threshold, indicating ongoing oliguria and inadequate rehydration response. Option A applies the older child standard (1 mL/kg/hr), which is incorrect for infants. Option C (0.5 mL/kg/hr) is the AGN oliguria definition threshold, not the normal minimum. Option D is incorrect — an output half the minimum requires active reassessment and intervention, not a 2-hour wait.",
    trap: "1 mL/kg/hr is the older-child minimum — applying it to an infant incorrectly classifies 18 mL as adequate when it is significantly below the 1.5–2 mL/kg/hr infant standard."
  },
  {
    id: "m7_17",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Hypertonic dehydration — slow correction rule",
    stem: "A 5-month-old is diagnosed with hypertonic dehydration. Serum sodium on admission is 168 mEq/L. The nurse is teaching a new nurse about correction goals. Which statement is CORRECT?",
    options: [
      "A. Sodium should be corrected by at least 20 mEq/L per day to prevent seizures",
      "B. Rapid correction is preferred to restore normal oncotic pressure quickly",
      "C. Sodium should be lowered no faster than 10–15 mEq/L per 24 hours to prevent rebound cerebral edema",
      "D. Sodium correction rate is not clinically significant for infants under 6 months"
    ],
    correct: ["C"],
    rationale: "Hypertonic dehydration must be corrected SLOWLY — no more than 10–15 mEq/L per 24 hours. In hypertonic dehydration, brain cells have adapted to the hyperosmolar environment by accumulating osmoles. If sodium is lowered too rapidly, free water rushes into brain cells, causing rebound cerebral edema and seizures. Option A is dangerous — 20 mEq/L/day exceeds the safe limit and risks cerebral edema. Option B is incorrect and directly contradicts the management principle. Option D is wrong — the correction rate is critical regardless of age and is especially dangerous to get wrong in infants.",
    trap: "Because the sodium is so high, students may think faster correction is better — the opposite is true; rapid correction of hypernatremia causes the cerebral edema it was originally trying to avoid."
  },
  {
    id: "m7_18",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Potassium replacement — confirm UO first",
    stem: "A 3-year-old with moderate dehydration receives a 20 mL/kg NS bolus. Post-bolus labs show serum potassium of 3.0 mEq/L. The nurse prepares to add potassium to the maintenance IV fluid. Which assessment finding must be confirmed BEFORE potassium is added?",
    options: [
      "A. Blood pressure returns to baseline",
      "B. Heart rate decreases below 100 bpm",
      "C. Urine output is present and adequate",
      "D. Serum sodium normalizes to 135 mEq/L"
    ],
    correct: ["C"],
    rationale: "Potassium must NEVER be added to IV fluids until urine output is confirmed as present and adequate. Potassium is renally excreted — if the kidneys are not producing urine, potassium will accumulate, causing hyperkalemia with risk of peaked T waves, bradycardia, and cardiac arrest. Option A (blood pressure normalization) is not the prerequisite — the kidneys' ability to excrete K+ is. Option B (HR) is not the determining factor for K+ replacement. Option D (serum sodium) is unrelated to potassium replacement decisions.",
    trap: "Because the potassium is low, students focus on replacing it quickly — but adding K+ to IVF before confirming UO risks lethal hyperkalemia if the kidneys remain oliguric."
  },
  {
    id: "m7_19",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Hyperkalemia clinical signs",
    stem: "A nurse reviews lab results for an 8-month-old infant with severe dehydration and oliguria. Serum potassium is 6.8 mEq/L. The nurse places the highest priority on which assessment?",
    options: [
      "A. Checking for bowel sounds and abdominal distension",
      "B. Placing the infant on a cardiac monitor and observing ECG for peaked T waves",
      "C. Assessing skin turgor and mucous membrane moisture",
      "D. Measuring head circumference for signs of increased intracranial pressure"
    ],
    correct: ["B"],
    rationale: "Hyperkalemia (K+ 6.8 mEq/L is significantly elevated; normal 3.5–5.0) causes peaked T waves and can progress to bradycardia, wide QRS, ventricular dysrhythmia, and cardiac arrest. This is a life-threatening electrolyte emergency requiring immediate cardiac monitoring. The critical sign to detect is peaked T waves on ECG. Option A (bowel sounds) is relevant because ileus can occur with both hypo- and hyperkalemia, but it is not the priority over cardiac monitoring. Option C (skin turgor) addresses dehydration, not the acute hyperkalemia. Option D (head circumference) is not relevant to hyperkalemia.",
    trap: "Ileus is associated with hypokalemia and students may choose bowel sounds — but with K+ of 6.8, the cardiac dysrhythmia risk takes absolute priority."
  },
  {
    id: "m7_20",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Cardiac/renal exception to standard bolus",
    stem: "A 4-year-old child with known congenital heart disease and moderate dehydration needs IV fluid resuscitation. The nurse anticipates which modification to the standard NS bolus order?",
    options: [
      "A. 20 mL/kg over 5–10 minutes — hypovolemia increases cardiac workload and must be corrected faster",
      "B. 20 mL/kg over 5–20 minutes — same standard regardless of cardiac history",
      "C. 5–10 mL/kg over 10–20 minutes — to prevent fluid overload in a patient with compromised cardiac function",
      "D. D5W 10 mL/kg as the preferred solution for cardiac patients"
    ],
    correct: ["C"],
    rationale: "For children with known cardiac or renal history, the standard 20 mL/kg NS bolus is modified to 5–10 mL/kg over 10–20 minutes to avoid fluid overload. The compromised cardiac function in congenital heart disease limits the ability to handle rapid volume loading — excess preload can worsen heart failure. Options A and B both use the standard 20 mL/kg without the necessary modification. Option D is wrong because D5W is contraindicated during resuscitation bolus for all patients — it provides no sustained volume expansion.",
    trap: "Because the child is dehydrated, students may assume the full 20 mL/kg must be given urgently — but cardiac history mandates the modified lower volume and slower rate."
  },
  {
    id: "m7_21",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Rotavirus vaccine and prevention",
    stem: "A parent of a 2-month-old asks the nurse whether anything can prevent their infant from getting the severe diarrheal illness that hospitalized their neighbor's child last winter. The nurse's BEST response is:",
    options: [
      "A. 'Strict handwashing is the only effective prevention strategy for all childhood diarrheal illnesses.'",
      "B. 'The rotavirus vaccine can prevent the most serious diarrheal illness in infants and young children.'",
      "C. 'No vaccine is currently available for the pathogen that causes the most severe pediatric gastroenteritis.'",
      "D. 'The hepatitis A vaccine covers most strains of viral gastroenteritis in infants.'"
    ],
    correct: ["B"],
    rationale: "Rotavirus is the most common cause of serious diarrheal illness in infants and young children and is now vaccine-preventable. The rotavirus oral vaccine series begins at 2 months of age. Handwashing (Option A) reduces transmission but is not the most effective prevention compared to vaccination. Option C is factually incorrect — the rotavirus vaccine exists and is part of the standard childhood immunization schedule. Option D is wrong — the hepatitis A vaccine protects against hepatitis A virus, not rotavirus or other gastrointestinal pathogens.",
    trap: "Students may focus exclusively on handwashing and miss that rotavirus is specifically vaccine-preventable — the vaccine is the definitive prevention strategy."
  },
  {
    id: "m7_22",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Fontanelle assessment",
    stem: "A nurse is assessing a 4-month-old infant following aggressive IV fluid resuscitation for severe dehydration. Which fontanelle finding would prompt the nurse to STOP the infusion and notify the provider immediately?",
    options: [
      "A. Sunken anterior fontanelle",
      "B. Flat anterior fontanelle",
      "C. Bulging anterior fontanelle",
      "D. Soft anterior fontanelle"
    ],
    correct: ["C"],
    rationale: "A bulging anterior fontanelle indicates increased intracranial pressure (ICP) or fluid overload — in the context of aggressive IV fluid resuscitation, it signals overhydration with potential cerebral edema. This requires stopping the infusion and immediate provider notification. Option A (sunken fontanelle) indicates dehydration — the finding that prompted the initial treatment. Option B (flat) is a normal finding. Option D (soft) is a normal descriptor for a non-tense fontanelle.",
    trap: "During resuscitation students focus on correcting the dehydration (sunken fontanelle) and may miss the transition to overhydration signaled by a bulging fontanelle."
  },
  {
    id: "m7_23",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Nursing assessment for dehydration",
    stem: "A nurse is assessing a 10-month-old infant with suspected dehydration from acute gastroenteritis. Which assessment findings indicate dehydration? SELECT ALL THAT APPLY.",
    options: [
      "A. Sunken anterior fontanelle",
      "B. Capillary refill of 4 seconds",
      "C. Bulging posterior fontanelle",
      "D. Decreased skin turgor with tenting",
      "E. Moist mucous membranes with tears present"
    ],
    correct: ["A", "B", "D"],
    rationale: "Sunken fontanelle (A) is a direct sign of decreased intracranial fluid volume in dehydration. Capillary refill >3 seconds (B) indicates poor peripheral perfusion from volume depletion. Decreased skin turgor with tenting (D) reflects loss of interstitial fluid. Option C (bulging posterior fontanelle) is a sign of increased ICP or overhydration, not dehydration — a bulging fontanelle contradicts the dehydration picture. Option E (moist membranes with tears) is a sign of ADEQUATE hydration, not dehydration.",
    trap: "A bulging fontanelle may appear in this list as a plausible infant finding — it indicates the OPPOSITE of dehydration and would require stopping IVF if present during rehydration."
  },
  {
    id: "m7_24",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Appropriate ORT teaching",
    stem: "A nurse is discharging a family with a 15-month-old with mild dehydration. Which teaching points are CORRECT for home oral rehydration? SELECT ALL THAT APPLY.",
    options: [
      "A. Offer WHO/UNICEF ORS (Pedialyte) in small frequent sips every 1–5 minutes",
      "B. Resume age-appropriate soft foods as the child tolerates eating",
      "C. Give sports drinks like Gatorade if Pedialyte is unavailable",
      "D. Return to the ED if the child develops decreased urine output, increased lethargy, or no improvement in 8 hours",
      "E. Encourage plain water exclusively to avoid upsetting the stomach further"
    ],
    correct: ["A", "B", "D"],
    rationale: "Small frequent sips of ORS (A) prevent vomiting and maintain a continuous absorption gradient. Resuming age-appropriate foods (B) supports nutrition and gut recovery per current guidelines — BRAT diet is not recommended. Return precautions (D) are correct safety teaching — worsening output, increasing lethargy, or no improvement indicates a need for escalation. Option C is wrong — sports drinks like Gatorade have high sugar content and incorrect electrolyte composition and are contraindicated for pediatric dehydration management. Option E is wrong — plain water dilutes remaining electrolytes and can cause hyponatremia.",
    trap: "Sports drinks seem like a reasonable substitute because they contain electrolytes — but their sugar content and electrolyte ratios are designed for exercising adults, not fluid-depleted children."
  },
  {
    id: "m7_25",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Indications for IV fluids over ORT",
    stem: "A nurse receives a 2-year-old with acute gastroenteritis. Which findings indicate that IV fluid therapy is required rather than ORT? SELECT ALL THAT APPLY.",
    options: [
      "A. Blood pressure 70/44 mmHg",
      "B. Inability to tolerate oral intake due to persistent vomiting",
      "C. Serum bicarbonate of 15 mEq/L with moderate dehydration signs and ability to drink",
      "D. Altered level of consciousness — the child does not respond to voice",
      "E. Mildly dry mucous membranes with normal vital signs"
    ],
    correct: ["A", "B", "D"],
    rationale: "Hypotension (A) indicates severe dehydration/shock — ORT is contraindicated and emergent IV fluids are needed. Persistent vomiting with inability to tolerate oral intake (B) is a direct contraindication to ORT. Altered LOC (D) prevents safe oral intake and signals severe dehydration with hemodynamic compromise. Option C is wrong — a bicarbonate of 15 (above the <13 IV threshold) with moderate dehydration and preserved ability to drink is a candidate for ORT trial, not mandatory IV. Option E (mildly dry membranes with normal VS) describes mild dehydration, which is managed with ORT.",
    trap: "A bicarbonate of 15 is concerning but above the threshold of <13 that indicates likely need for IV — if the child can drink and has no altered LOC, ORT trial is still appropriate."
  },
  {
    id: "m7_26",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Signs of severe dehydration",
    stem: "A nurse is triaging a 7-month-old infant brought in after 2 days of vomiting and diarrhea. Which assessment findings indicate SEVERE dehydration? SELECT ALL THAT APPLY.",
    options: [
      "A. Mottled, gray skin with capillary refill of 5 seconds",
      "B. No urine output for the past 10 hours",
      "C. Anterior fontanelle slightly sunken with present tears",
      "D. Altered level of consciousness — does not respond to painful stimulus",
      "E. Heart rate of 136 bpm with slightly dry mucous membranes"
    ],
    correct: ["A", "B", "D"],
    rationale: "Mottled skin and capillary refill >3 seconds (A) indicate circulatory failure consistent with severe dehydration/shock. Prolonged absence of urine output (B) reflects severe renal hypoperfusion. Altered LOC with no response to painful stimulus (D) is a severe finding indicating impaired cerebral perfusion. Option C (slightly sunken fontanelle with present tears) is consistent with mild dehydration — present tears and slight sinking indicate moderate at most, not severe. Option E (HR 136 with slightly dry membranes) is consistent with mild dehydration — moderate-severe requires more pronounced tachycardia plus additional findings.",
    trap: "Tachycardia alone does not indicate severe dehydration — it must be accompanied by hypotension, mottling, absent UO, or altered LOC to meet the severe threshold."
  },
  {
    id: "m7_27",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Appropriate interventions for hypertonic dehydration",
    stem: "A 6-month-old is admitted with serum sodium of 162 mEq/L and hypertonic dehydration. The nurse prepares to initiate care. Which interventions are APPROPRIATE? SELECT ALL THAT APPLY.",
    options: [
      "A. Plan sodium correction at a rate no faster than 10–15 mEq/L per 24 hours",
      "B. Use D5W for initial IV resuscitation to provide free water and lower sodium quickly",
      "C. Monitor neurological status closely throughout rehydration",
      "D. Assess skin turgor carefully, recognizing doughy texture may underestimate severity",
      "E. Administer a rapid bolus to lower sodium as quickly as possible to prevent seizures"
    ],
    correct: ["A", "C", "D"],
    rationale: "Slow correction at no faster than 10–15 mEq/L/24 hours (A) is mandatory to prevent rebound cerebral edema. Close neuro monitoring (C) is essential throughout rehydration to detect seizure activity from either ongoing hypernatremia or rapid correction. Recognizing that doughy skin underestimates severity (D) is a critical assessment point specific to hypertonic dehydration. Option B (D5W) is wrong — D5W is contraindicated for resuscitation bolus and would not safely or appropriately lower sodium. Option E contradicts the core management principle — rapid correction of hypertonic dehydration causes cerebral edema and seizures.",
    trap: "D5W appears to target the problem (sodium too high, give free water) but it is contraindicated for bolus resuscitation and cannot safely manage hypertonic dehydration correction."
  },
  {
    id: "m7_28",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Priority action — severe dehydration with shock signs",
    stem: "A nurse is assessing a 15-month-old with the following findings: HR 192, BP 60/34, capillary refill 6 seconds, no urine in 12 hours, mottled extremities, and no response to voice. Which is the PRIORITY nursing action?",
    options: [
      "A. Obtain a serum bicarbonate level to confirm severity before starting IVF",
      "B. Establish IV access and begin NS 20 mL/kg bolus over 5–10 minutes",
      "C. Encourage oral Pedialyte at 100 mL/kg over 4–6 hours",
      "D. Notify the provider and await orders before initiating any fluid therapy"
    ],
    correct: ["B"],
    rationale: "This child is in hypovolemic shock — RAPID positive with hypotension (BP 60/34), absent UO, altered LOC, and mottled extremities. The priority action is immediate IV access and emergent NS 20 mL/kg bolus over 5–10 minutes (RAPID positive = fastest infusion rate). Option A is wrong — in shock, lab confirmation is not the priority; treatment cannot wait for a bicarbonate result. Option C is contraindicated — ORT is not appropriate for a child with altered LOC or hemodynamic instability. Option D is wrong — in a code-level situation, the nurse initiates resuscitation and notifies simultaneously; waiting for orders costs critical time.",
    trap: "Students may choose 'notify provider first' because it feels like proper procedure — but in pediatric hemodynamic emergency, the nurse initiates the fluid resuscitation and notifies simultaneously."
  },
  {
    id: "m7_29",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Vomiting vs. diarrhea — acid-base effect",
    stem: "A nurse is caring for two pediatric patients. Patient A has been vomiting for 3 days. Patient B has had profuse diarrhea for 3 days. The nurse anticipates which acid-base pattern for each patient?",
    options: [
      "A. Patient A: metabolic acidosis; Patient B: metabolic alkalosis",
      "B. Patient A: metabolic alkalosis; Patient B: metabolic acidosis",
      "C. Both patients develop metabolic acidosis from dehydration",
      "D. Both patients develop metabolic alkalosis from fluid loss"
    ],
    correct: ["B"],
    rationale: "Vomiting causes loss of hydrochloric acid (HCl) from the stomach, leaving a relative bicarbonate excess — metabolic alkalosis (high bicarb). Diarrhea causes loss of bicarbonate from the small intestine in stool — metabolic acidosis (low bicarb). This is why serum bicarbonate is a severity marker specifically for diarrheal illness — the lower the bicarb, the more bicarbonate has been lost in stool. Options A and C/D reverse or homogenize these distinct mechanisms.",
    trap: "Both conditions involve fluid loss from the GI tract — students assume both cause the same acid-base disturbance, missing that the direction depends entirely on WHAT is lost (HCl vs. HCO3)."
  },
  {
    id: "m7_30",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Recovery UO target",
    stem: "A nurse is evaluating a 3-year-old post-rehydration for dehydration. Which urine output confirms the child has adequately responded to rehydration?",
    options: [
      "A. 0.5 mL/kg/hr — the AGN oliguria threshold has been exceeded",
      "B. Greater than 1 mL/kg/hr — the recovery urine output target has been met",
      "C. 1 mL/kg/hr exactly — this meets the infant minimum UO standard",
      "D. Any measurable urine output within 2 hours of initiating IVF"
    ],
    correct: ["B"],
    rationale: "The recovery urine output target after rehydration is >1 mL/kg/hr — this is the outcome criterion that confirms adequate fluid resuscitation and restoration of renal perfusion. Option A (0.5 mL/kg/hr) is the threshold that DEFINES oliguria in AGN, not a recovery target. Option C (1 mL/kg/hr exactly) hits the older child minimum but the recovery TARGET is 'greater than' — the direction matters. Option D (any measurable output) is not a sufficient criterion — small amounts of urine can occur without adequate resuscitation.",
    trap: "0.5 mL/kg/hr sounds like a threshold students know — but it is the AGN oliguria definition, not the dehydration recovery target, which is >1 mL/kg/hr."
  },
  {
    id: "m7_chain1_q1",
    type: "CHAIN",
    chain_id: "m7_chain1",
    chain_scenario: "A 7-month-old, 8-kg infant is brought to the ED by parents who report 48 hours of vomiting and diarrhea. The infant was previously well and is not on any medications. On assessment: HR 184 bpm, BP 78/52 mmHg, capillary refill 2 seconds, slightly sunken anterior fontanelle, dry mucous membranes, decreased tears, skin turgor with 2-second tenting, last wet diaper 6 hours ago. Parents report giving the infant diluted apple juice at home. Temperature is 38.1°C.",
    concept: "Dehydration severity classification",
    stem: "Based on the assessment findings, the nurse correctly classifies this infant's dehydration as which severity level, and identifies which finding is MOST critical to this classification?",
    options: [
      "A. Mild dehydration — dry mucous membranes are the defining feature",
      "B. Moderate dehydration — the combination of tachycardia, sunken fontanelle, decreased tears, and oliguria supports this classification",
      "C. Severe dehydration — the hypotension is the defining finding for this classification",
      "D. Severe dehydration — the 2-second capillary refill and tenting confirm this severity"
    ],
    correct: ["B"],
    rationale: "This infant has moderate dehydration: HR elevation, sunken fontanelle, dry membranes, decreased tears, skin turgor tenting, and oliguria. The BP is 78/52 — this is within acceptable range for a 7-month-old (minimum systolic approximately 70 + [2×age in years]), and capillary refill is 2 seconds (not >3). Severe dehydration requires hypotension AND mottling/prolonged cap refill/altered LOC. Option C is wrong — hypotension would shift this to severe, but BP is not critically low for this age. Option D is wrong — 2-second cap refill and tenting are moderate, not severe findings.",
    trap: "HR of 184 and oliguria look alarming — but severity classification requires hypotension, mottling, or altered LOC to reach severe; this infant still has an adequate BP."
  },
  {
    id: "m7_chain1_q2",
    type: "CHAIN",
    chain_id: "m7_chain1",
    chain_scenario: "A 7-month-old, 8-kg infant is brought to the ED by parents who report 48 hours of vomiting and diarrhea. The infant was previously well and is not on any medications. On assessment: HR 184 bpm, BP 78/52 mmHg, capillary refill 2 seconds, slightly sunken anterior fontanelle, dry mucous membranes, decreased tears, skin turgor with 2-second tenting, last wet diaper 6 hours ago. Parents report giving the infant diluted apple juice at home. Temperature is 38.1°C.",
    concept: "Dehydration management — ORT vs. IVF decision",
    stem: "The infant is alert and crying vigorously. A serum bicarbonate returns at 15 mEq/L. Which is the PRIORITY nursing intervention at this time?",
    options: [
      "A. Insert a peripheral IV and begin NS 20 mL/kg bolus over 5–10 minutes due to RAPID-positive status",
      "B. Initiate oral rehydration therapy with WHO/UNICEF ORS at 100 mL/kg over 4–6 hours",
      "C. Begin D5W maintenance IV fluids at the calculated Holliday-Segar rate",
      "D. Insert a peripheral IV and begin NS 20 mL/kg bolus over 5–20 minutes due to RAPID-negative status"
    ],
    correct: ["B"],
    rationale: "The infant is alert, crying vigorously, able to drink, and has a BP within acceptable range for age — this is a RAPID-negative (BP stable) patient with moderate dehydration. ORT is first-line for moderate dehydration in a child who can drink: 100 mL/kg of WHO/UNICEF ORS over 4–6 hours. Option A is wrong because this is RAPID-negative (BP 78/52 is not hypotensive for a 7-month-old) and IVF is not indicated when the child can drink. Option C is wrong — D5W is contraindicated during resuscitation. Option D incorrectly escalates to IVF when ORT criteria are met — the vigorous cry and alertness confirm the infant can tolerate oral fluids.",
    trap: "The parents gave apple juice, which is wrong — but this only informs teaching. The alert, vigorously crying infant with normal BP remains a candidate for ORT, not IV escalation."
  },
  {
    id: "m7_chain1_q3",
    type: "CHAIN",
    chain_id: "m7_chain1",
    chain_scenario: "A 7-month-old, 8-kg infant is brought to the ED by parents who report 48 hours of vomiting and diarrhea. The infant was previously well and is not on any medications. On assessment: HR 184 bpm, BP 78/52 mmHg, capillary refill 2 seconds, slightly sunken anterior fontanelle, dry mucous membranes, decreased tears, skin turgor with 2-second tenting, last wet diaper 6 hours ago. Parents report giving the infant diluted apple juice at home. Temperature is 38.1°C.",
    concept: "Dehydration — ORT response evaluation and discharge teaching",
    stem: "After 4 hours of ORT, the infant has produced 24 mL of urine. The nurse is evaluating the rehydration response. Which interpretation is CORRECT?",
    options: [
      "A. The infant's output is adequate — 24 mL exceeds the 1 mL/kg/hr older child standard",
      "B. The infant's output is inadequate — 24 mL falls below the 1.5–2 mL/kg/hr infant minimum of 48–64 mL expected over 4 hours",
      "C. The infant's output is at the recovery target — >1 mL/kg/hr has been met",
      "D. Any urine output after 6 hours of oliguria confirms successful ORT response"
    ],
    correct: ["B"],
    rationale: "For this 8-kg infant, minimum urine output = 1.5–2 mL/kg/hr. Over 4 hours, the expected minimum is 8 kg × 1.5 × 4 = 48 mL minimum; at 2 mL/kg/hr = 64 mL. The infant produced 24 mL — well below both thresholds, indicating ongoing oliguria and inadequate rehydration response despite ORT. Option A applies the older-child standard (1 mL/kg/hr = 32 mL over 4 hours), which is incorrect for infants. Option C (recovery target >1 mL/kg/hr) = 32 mL over 4 hours; 24 mL does not meet this either. Option D is wrong — the volume and rate of output matter, not just any measurable output.",
    trap: "24 mL of urine sounds like a successful response — but applying the infant standard (1.5–2 mL/kg/hr × 8 kg × 4 hours = 48–64 mL expected minimum) reveals it is significantly below target."
  }
];

const M8_QUESTIONS = [
  {
    id: "m8_1",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "AGN — pathophysiology and cause",
    stem: "A 7-year-old is admitted with tea-colored urine, bilateral periorbital edema, and hypertension. The parents report the child had a sore throat 2 weeks ago that resolved without treatment. The nurse recognizes that the MOST likely cause of these findings is:",
    options: [
      "A. Minimal change nephrotic syndrome from immune dysregulation",
      "B. Vesicoureteral reflux from congenital structural abnormality",
      "C. Post-streptococcal immune complex deposition in the glomeruli",
      "D. Viral cystitis from hematogenous spread of respiratory pathogen"
    ],
    correct: ["C"],
    rationale: "Post-streptococcal AGN follows Group A beta-hemolytic strep infection (throat or impetigo) by a lag period of 10–21 days. The immune complexes deposit in the glomeruli, causing inflammation, reduced GFR, hematuria, and renin-mediated hypertension. The 2-week lag after strep throat followed by tea-colored urine and periorbital edema is the classic AGN presentation. Option A (MCNS) causes massive proteinuria and generalized edema with NORMAL or low BP — not hematuria or hypertension. Option B (VUR) causes recurrent pyelonephritis, not post-infectious glomerulonephritis. Option D is not a recognized mechanism for AGN.",
    trap: "MCNS also presents with periorbital edema and can appear in school-age children — the discriminating features are tea-colored urine and hypertension (AGN) versus frothy urine and normal/low BP (nephrotic)."
  },
  {
    id: "m8_2",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "AGN — lag period and seasonality",
    stem: "A school-age child is diagnosed with post-streptococcal AGN. The parents ask why their child did not develop symptoms immediately when they had strep throat. The nurse's BEST explanation is:",
    options: [
      "A. The strep bacteria directly invaded the kidneys and symptoms appear after the bacteria multiply sufficiently.",
      "B. The immune system forms complexes against strep antigens 10–21 days after infection; these complexes deposit in the glomeruli and trigger inflammation.",
      "C. The lag period is 48–72 hours, which is why the child seemed to recover before developing kidney symptoms.",
      "D. Strep toxins circulate for 1–2 weeks before reaching therapeutic concentrations in the kidney."
    ],
    correct: ["B"],
    rationale: "AGN is an immune-mediated disease — the kidneys are not directly infected. The strep infection triggers antibody formation; the antigen-antibody immune complexes deposit in the glomerular basement membrane 10–21 days later, activating complement and causing the inflammatory glomerular damage that produces hematuria, edema, and hypertension. Option A is incorrect — bacteria do not directly invade the kidneys in post-strep AGN. Option C gives an incorrect lag period — 48–72 hours is too short. Option D describes a pharmacological mechanism that does not apply to post-infectious immune response.",
    trap: "Students may think the strep is still active and that antibiotics will cure the kidney disease — antibiotic therapy eliminates remaining strep but cannot prevent or reverse AGN once the immune response has been triggered."
  },
  {
    id: "m8_3",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "AGN — clinical manifestations",
    stem: "A 6-year-old presents with periorbital puffiness noted by parents every morning that improves by afternoon. The child also has decreased urine output and is described as 'more tired than usual.' Urinalysis shows RBCs and RBC casts. BP is 138/88. Which additional finding would MOST strongly support the diagnosis of AGN?",
    options: [
      "A. Serum albumin of 1.8 g/dL with frothy urine on dipstick",
      "B. Positive ASO titer with decreased C3 complement",
      "C. Positive urinary nitrites with elevated WBC count on urinalysis",
      "D. Generalized dependent edema with ascites"
    ],
    correct: ["B"],
    rationale: "Positive ASO titer confirms recent Group A strep infection, and decreased C3 complement confirms immune complex consumption — together these lab findings are diagnostic for post-strep AGN. The clinical picture already shows the periorbital AM edema, hematuria, oliguria, and hypertension classic for AGN. Option A (low albumin + frothy urine) describes nephrotic syndrome — albumin is normal or mildly decreased in AGN. Option C (positive nitrites + WBC) describes UTI, not AGN — UTI does not cause RBC casts or hypertension from renin release. Option D (generalized edema with ascites) is nephrotic syndrome presentation.",
    trap: "ASO titer AND C3 together are what confirm AGN — a positive ASO alone only confirms strep; the decreased C3 confirms immune complex consumption in the kidney."
  },
  {
    id: "m8_4",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "AGN — C3 complement follow-up",
    stem: "A child with post-streptococcal AGN has a C3 complement level of 42 mg/dL (low) at diagnosis. At the 10-week follow-up appointment, C3 remains low at 44 mg/dL. The nurse correctly anticipates which provider action?",
    options: [
      "A. Reassure the family — C3 may take up to 6 months to normalize in post-strep AGN",
      "B. Document the finding and continue current management without further workup",
      "C. Refer for further evaluation — C3 should normalize within 8 weeks; persistent low C3 suggests an alternative cause",
      "D. Increase the prednisone dose — the corticosteroid has not yet corrected the complement deficit"
    ],
    correct: ["C"],
    rationale: "In post-streptococcal AGN, C3 complement normalizes within 8 weeks as the immune complexes are cleared. If C3 remains low after 8 weeks, the diagnosis requires re-evaluation — it may indicate an ongoing immune process such as membranoproliferative glomerulonephritis (MPGN) or lupus nephritis. Options A and B are wrong because persistent low C3 at 10 weeks is beyond the expected window and signals a need for further workup, not reassurance. Option D is wrong — corticosteroids are not the standard treatment for AGN and are used for nephrotic syndrome; there is no C3-raising steroid protocol for AGN.",
    trap: "Students may reassure the family because 'kidneys take time to heal' — but the 8-week C3 normalization window is a specific clinical marker and missed low C3 at follow-up is a red flag for a different diagnosis."
  },
  {
    id: "m8_5",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "AGN — potassium restriction during oliguria",
    stem: "A child with AGN has oliguria with urine output of 0.3 mL/kg/hr. The nurse prepares to initiate dietary restrictions. Which instruction is CORRECT?",
    options: [
      "A. Restrict potassium until urine output normalizes, then resume normal dietary intake",
      "B. Increase potassium-rich foods to replace what is lost in the oliguria",
      "C. Restrict sodium permanently because AGN causes chronic kidney damage",
      "D. No dietary restrictions are needed unless serum potassium drops below 3.5 mEq/L"
    ],
    correct: ["A"],
    rationale: "During oliguria in AGN, the kidneys cannot excrete potassium normally — dietary potassium must be restricted to prevent hyperkalemia (peaked T waves, bradycardia, cardiac arrest). UO of 0.3 mL/kg/hr is below the oliguria threshold of <0.5 mL/kg/hr. Once urine output normalizes, potassium restriction is lifted. Option B is dangerous — adding potassium during oliguria will cause hyperkalemia. Option C is wrong — sodium restriction is temporary (while edema and HTN are present), not permanent; most cases of AGN resolve completely within 6–12 months. Option D is wrong — with impaired renal excretion, serum K+ will RISE, not fall; waiting for a low K+ before restricting input is backwards management.",
    trap: "Students know potassium replacement is used in dehydration and hypokalemia — in AGN oliguria, the problem is impaired K+ excretion, so dietary K+ must be RESTRICTED, not supplemented."
  },
  {
    id: "m8_6",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "AGN — prognosis",
    stem: "The parents of a 7-year-old with post-streptococcal AGN ask the nurse whether their child will develop permanent kidney damage. The nurse's MOST accurate response is:",
    options: [
      "A. 'Post-strep AGN has a 50% chance of progressing to end-stage renal disease and your child will need long-term nephrology follow-up.'",
      "B. 'Most children recover completely within 6–12 months, and fewer than 1% progress to end-stage renal disease.'",
      "C. 'Recovery depends entirely on how quickly the prednisone course works — the kidneys should respond within 2 weeks.'",
      "D. 'Once proteinuria resolves, kidney function is fully restored with no risk of recurrence.'"
    ],
    correct: ["B"],
    rationale: "Post-streptococcal AGN has an excellent prognosis — most children recover completely within 6–12 months, and fewer than 1% progress to end-stage renal disease. This is an important teaching point because families are understandably frightened by the acute presentation. Option A overstates the risk dramatically (50% is incorrect). Option C is wrong — prednisone is not standard treatment for AGN; corticosteroids are used for nephrotic syndrome. Option D is incorrect framing — not all AGN involves nephrotic-range proteinuria, and the qualifier about recurrence risk is misleading.",
    trap: "Because AGN involves kidney inflammation, students may predict poor long-term outcomes — but post-strep AGN specifically carries a <1% ESRD progression rate and an excellent prognosis."
  },
  {
    id: "m8_7",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Nephrotic syndrome — MCNS and demographics",
    stem: "A nurse is reviewing newly admitted pediatric patients. Which patient presentation is MOST consistent with minimal change nephrotic syndrome (MCNS)?",
    options: [
      "A. A 10-year-old girl with tea-colored urine, hypertension, and elevated ASO titer after a recent throat infection",
      "B. A 4-year-old boy with facial puffiness worse in the morning, 3+ protein on urine dipstick, and low serum albumin",
      "C. A 2-month-old infant with hematuria and positive blood culture for Group B Streptococcus",
      "D. A 9-year-old girl with dysuria, frequency, urgency, and urine culture positive for E. coli"
    ],
    correct: ["B"],
    rationale: "MCNS is the most common form of nephrotic syndrome in children, occurring predominantly in ages 2–7 years and twice as commonly in males. The presentation includes massive proteinuria (3–4+ on dipstick), facial puffiness (periorbital edema worse in the morning), and hypoalbuminemia. Option A describes AGN (tea-colored urine, hypertension, positive ASO titer after strep) — wrong condition. Option C describes a neonatal sepsis scenario, not nephrotic syndrome. Option D describes a school-age UTI, not nephrotic syndrome.",
    trap: "Both AGN and MCNS cause periorbital edema — the discriminating features are urine character (hematuria vs. proteinuria), BP (elevated vs. normal/low), and ASO titer (positive vs. negative)."
  },
  {
    id: "m8_8",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Nephrotic syndrome — pathophysiology of edema",
    stem: "A nurse is explaining the mechanism of edema to the parents of a 3-year-old with nephrotic syndrome. Which explanation is MOST accurate?",
    options: [
      "A. The kidneys retain too much sodium and water, directly increasing total body fluid volume",
      "B. Protein leaking into the urine lowers the blood's ability to hold fluid in the vessels, causing fluid to shift into tissues",
      "C. Inflammation of the glomeruli traps fluid in the kidney, causing backup pressure into surrounding tissues",
      "D. High blood pressure from renin release forces fluid out of blood vessels into surrounding tissue"
    ],
    correct: ["B"],
    rationale: "In nephrotic syndrome, immune dysregulation causes loss of the glomerular charge barrier, leading to massive protein (especially albumin) leak into the urine. The resulting hypoalbuminemia reduces oncotic pressure — the force that holds fluid within blood vessels — allowing fluid to shift from the vascular compartment into the interstitial space. This is 'Protein Out = Water In' — fluid moves into tissues. Option A describes a secondary compensation (aldosterone activation) but is not the primary mechanism of edema. Option C describes AGN with impaired filtration, not the low-oncotic mechanism. Option D describes AGN (renin-mediated hypertension), not nephrotic syndrome where BP is typically normal or low.",
    trap: "Students may choose Option A because they know kidneys retain sodium in nephrotic syndrome — but sodium retention is secondary to the low oncotic pressure, not the primary cause of edema."
  },
  {
    id: "m8_9",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Nephrotic syndrome vs. AGN — BP discrimination",
    stem: "A nurse is caring for two children admitted on the same day. Child A with nephrotic syndrome has a blood pressure of 92/58 mmHg (low for age). Child B with AGN has a blood pressure of 142/90 mmHg. The nurse is asked to explain why the blood pressures differ. Which explanation is CORRECT?",
    options: [
      "A. Nephrotic syndrome causes fluid overload, raising blood pressure; AGN causes hypovolemia, lowering it",
      "B. In AGN, impaired filtration triggers renin release and fluid retention, raising BP; in nephrotic syndrome, low albumin depletes the vascular compartment, lowering BP",
      "C. Both conditions cause hypertension; the difference reflects individual variation, not disease mechanism",
      "D. Corticosteroid treatment in nephrotic syndrome directly causes hypotension as a side effect"
    ],
    correct: ["B"],
    rationale: "In AGN, glomerular inflammation reduces GFR → fluid and sodium retention → ↑ renin → vasoconstriction → hypertension. In nephrotic syndrome, massive protein leak → hypoalbuminemia → low oncotic pressure → fluid leaves vasculature → relatively low intravascular volume → normal or low BP. Option A reverses the mechanisms — it is AGN that causes fluid overload and hypertension, not nephrotic syndrome. Option C is wrong — the BP difference is a defining discriminating feature, not random variation. Option D is incorrect — Child A is newly admitted, and steroid side effects (HTN) develop with long-term use, not at admission.",
    trap: "Both conditions involve edema and altered fluid balance — students may assume both cause hypertension, missing that in nephrotic syndrome the vascular compartment is actually depleted."
  },
  {
    id: "m8_10",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Nephrotic syndrome — DVT/PE risk",
    stem: "A nurse is caring for a 5-year-old with nephrotic syndrome who develops sudden onset right leg swelling and calf tenderness. The nurse's PRIORITY action is:",
    options: [
      "A. Increase the prednisone dose as this represents a relapse of nephrotic syndrome",
      "B. Notify the provider immediately — this presentation is consistent with deep vein thrombosis secondary to the hypercoagulable state of nephrotic syndrome",
      "C. Apply a warm compress to the affected leg to reduce protein deposits causing the swelling",
      "D. Encourage ambulation to promote lymphatic drainage of the protein-rich edema"
    ],
    correct: ["B"],
    rationale: "Nephrotic syndrome creates a hypercoagulable state because urinary protein loss includes antithrombin III, protein C, and protein S — natural anticoagulants. This leads to significantly increased risk for DVT and PE. Sudden unilateral leg swelling with calf tenderness in a child with nephrotic syndrome is DVT until proven otherwise. This is a confirmed professor exam content area. Option A is wrong — this is not a nephrotic relapse; a relapse would cause bilateral worsening edema + increased proteinuria, not unilateral leg pain. Option C is incorrect — DVT is not related to protein deposits. Option D is contraindicated — ambulation in suspected DVT risks embolization.",
    trap: "Students focus on the edema pattern of nephrotic syndrome (generalized bilateral) and may attribute unilateral leg swelling to the same cause — but asymmetric leg swelling with tenderness in nephrotic syndrome is DVT until proven otherwise."
  },
  {
    id: "m8_11",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Nephrotic syndrome — corticosteroid treatment",
    stem: "A 4-year-old is newly diagnosed with nephrotic syndrome. The prescriber orders prednisone therapy. The nurse correctly anticipates which initial dosing regimen?",
    options: [
      "A. Prednisone 0.5 mg/kg/day for 4 weeks, then stop",
      "B. Prednisone 2 mg/kg/day daily for 6 weeks, then 1.5 mg/kg every other day for 6 weeks",
      "C. Prednisone 1 mg/kg every other day for 12 weeks total",
      "D. Prednisone 5 mg/kg/day for 2 weeks — high dose to rapidly clear proteinuria"
    ],
    correct: ["B"],
    rationale: "The standard corticosteroid protocol for MCNS (Minimal Change Nephrotic Syndrome) is prednisone 2 mg/kg/day (maximum 60 mg) for 6 weeks, followed by 1.5 mg/kg every other day for another 6 weeks. This two-phase approach induces remission then tapers to reduce relapse risk. Option A underdoses and treats for too short a duration. Option C uses an every-other-day schedule from the start and an incorrect dose. Option D at 5 mg/kg/day would exceed the 2 mg/kg maximum dose and risks severe corticosteroid toxicity without additional benefit.",
    trap: "Students may choose 1 mg/kg as a 'standard steroid dose' from other contexts — the nephrotic syndrome protocol specifically starts at 2 mg/kg/day, not 1 mg/kg."
  },
  {
    id: "m8_12",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Nephrotic syndrome — steroid side effects teaching",
    stem: "The nurse is teaching the parents of a 3-year-old starting prednisone for nephrotic syndrome. Which parent statement indicates CORRECT understanding of expected short-term side effects?",
    options: [
      "A. 'My child may lose weight and have decreased appetite because steroids speed up metabolism.'",
      "B. 'My child may have increased appetite, weight gain, rounding of the face, and mood changes.'",
      "C. 'My child will experience permanent growth stunting even after the prednisone is stopped.'",
      "D. 'My child is at no risk for infection because prednisone strengthens the immune system.'"
    ],
    correct: ["B"],
    rationale: "Short-term prednisone side effects include increased appetite, weight gain, moon face (rounding due to fat redistribution), and behavioral/mood changes — all correctly described in Option B. These are expected and do not require stopping treatment. Option A reverses the metabolic effects — corticosteroids cause increased appetite and weight gain, not weight loss. Option C overstates the long-term risk — growth retardation is a long-term side effect that may partially reverse; it is not necessarily permanent. Option D is dangerous and incorrect — corticosteroids suppress the immune system, increasing infection risk, particularly peritonitis in children with nephrotic syndrome.",
    trap: "Because nephrotic children already lose IgG in the urine and are immunocompromised, adding steroids creates compounded infection risk — it does not strengthen immunity."
  },
  {
    id: "m8_13",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Nephrotic syndrome — 25% albumin infusion",
    stem: "A 4-year-old with nephrotic syndrome has a serum albumin of 1.4 g/dL, respiratory distress from pleural effusion, and labial edema causing difficulty ambulating. The provider orders 25% albumin IV. The nurse monitors for which PRIORITY complication following this infusion?",
    options: [
      "A. Hyperkalemia from albumin breakdown releasing intracellular potassium",
      "B. Fluid overload and pulmonary edema from rapid expansion of the intravascular compartment",
      "C. Hypoglycemia from glucose depletion in the albumin preparation",
      "D. Seizures from rapid correction of the hyponatremia associated with albumin deficit"
    ],
    correct: ["B"],
    rationale: "25% albumin IV is a highly hypertonic colloid — it rapidly draws fluid from the interstitial space back into the vascular compartment by increasing oncotic pressure. While this is the therapeutic goal, in a child with already-stressed cardiovascular function, the rapid intravascular volume expansion can cause fluid overload and pulmonary edema. Close monitoring for signs of respiratory decompensation is critical post-infusion. Option A is incorrect — albumin infusion does not cause clinically significant hyperkalemia. Option C is incorrect — albumin preparations do not contain glucose. Option D is incorrect — albumin does not acutely correct sodium levels.",
    trap: "25% albumin is used specifically because the child is volume-depleted — but the rapid volume shift from the interstitium to the vascular space can overload the circulation, particularly in a child with compromised cardiac reserve."
  },
  {
    id: "m8_14",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "AGN vs. Nephrotic — urine discrimination",
    stem: "A nurse receives two pediatric patients simultaneously. Patient A's urine looks like brown iced tea. Patient B's urine produces persistent foam when swirled in the cup. Without further labs, the nurse correctly associates which diagnosis with each patient?",
    options: [
      "A. Patient A: nephrotic syndrome (massive proteinuria causes the discoloration); Patient B: AGN (hematuria causes froth)",
      "B. Patient A: AGN (hematuria from red blood cells turns urine tea-colored); Patient B: nephrotic syndrome (massive proteinuria causes frothy urine)",
      "C. Both patients likely have AGN — both hematuria and proteinuria are present in post-strep disease",
      "D. Both patients likely have UTI — both presentations reflect bacterial-induced urine changes"
    ],
    correct: ["B"],
    rationale: "Tea-colored (smoky, cola-colored) urine is the hallmark of gross hematuria in AGN — red blood cells give the urine its characteristic color. Frothy urine is the hallmark of massive proteinuria in nephrotic syndrome — protein acts as a surfactant, reducing surface tension and causing persistent foam. These are two distinct and opposite urine findings that discriminate the two conditions. Option A reverses them. Option C is wrong — while AGN does have mild proteinuria, the tea color distinguishes it from frothy proteinuric urine of nephrotic syndrome. Option D is wrong — UTI causes cloudy, malodorous urine, not tea-colored or frothy urine.",
    trap: "AGN has MILD proteinuria and nephrotic syndrome has MASSIVE proteinuria — but only the nephrotic-range proteinuria produces the classic froth; tea color is from RBCs, not protein."
  },
  {
    id: "m8_15",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "AGN vs. Nephrotic — edema pattern discrimination",
    stem: "A parent reports that their child's eye puffiness is worst every morning but almost gone by afternoon and does NOT involve the abdomen or ankles. This edema pattern is MOST consistent with which condition?",
    options: [
      "A. Nephrotic syndrome — generalized edema follows a facial morning pattern",
      "B. Allergic reaction — periorbital swelling isolated to the face",
      "C. AGN — bilateral periorbital edema from dependent fluid pooling during recumbent sleep, improving with gravity during the day",
      "D. Cellulitis — morning worsening with daytime improvement is classic for infectious edema"
    ],
    correct: ["C"],
    rationale: "Bilateral periorbital edema that is worse in the morning and improves by afternoon is the hallmark AGN edema pattern. It results from fluid pooling around the loose periorbital tissue during recumbent sleep, then redistributing with gravity during the day. AGN edema is bilateral periorbital ONLY (not dependent/generalized). Option A is wrong — nephrotic syndrome causes generalized edema (periorbital AM, dependent PM, ascites, pleural effusion), not just isolated periorbital. Option B (allergic reaction) would typically be unilateral or asymmetric and have an allergen history. Option D (cellulitis) is unilateral, warm, tender, and does not resolve with gravity.",
    trap: "The fact that edema improves by afternoon may lead students to attribute it to an allergic reaction — in AGN, the morning-to-afternoon change is a gravitational pattern of periorbital fluid pooling during sleep."
  },
  {
    id: "m8_16",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "UTI — presentation by age",
    stem: "A parent brings a 6-week-old infant to the clinic with a 2-day fever of 38.8°C. The infant is irritable, feeding poorly, and has not gained weight appropriately since birth. No other localizing symptoms are present. The nurse's PRIORITY diagnostic concern is:",
    options: [
      "A. Viral upper respiratory infection — fever and irritability are common in young infants",
      "B. Urinary tract infection — UTI is a common occult fever source in infants with nonspecific symptoms",
      "C. Sepsis from Group B Streptococcus — the most common cause of neonatal bacteremia",
      "D. Acute otitis media — the most common bacterial infection in infants 6 weeks of age"
    ],
    correct: ["B"],
    rationale: "UTI is one of the most common causes of occult fever in infants under 2 years — the presentation is entirely nonspecific (fever, irritability, poor feeding, failure to thrive) with no localizing urinary symptoms. This is the high-yield teaching: in a febrile infant without obvious source, UTI must be on the differential and confirmed or ruled out with a catheter urine specimen. Option A is not the priority diagnostic concern — viral URI would typically have respiratory symptoms. Option C (GBS sepsis) is more common in the first 48–72 hours of life. Option D (AOM) would require otoscopic findings; the most common bacterial infection in infants 6 weeks of age is actually UTI.",
    trap: "Without dysuria or frequency, UTI seems unlikely in an infant — but infants cannot verbalize urinary symptoms, making UTI a primary consideration for any infant with unexplained fever."
  },
  {
    id: "m8_17",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "UTI — specimen collection",
    stem: "A nurse needs to obtain a urine specimen from a 4-month-old infant with suspected UTI. Which collection method is MOST appropriate?",
    options: [
      "A. Apply a urine collection bag to the perineal area after cleaning",
      "B. Obtain a midstream clean-catch specimen during the next diaper change",
      "C. Obtain a specimen via sterile urethral catheterization",
      "D. Wait for a spontaneous void and collect urine from the diaper"
    ],
    correct: ["C"],
    rationale: "Sterile urethral catheterization (or suprapubic aspiration) is the required method for urine specimen collection in infants for UTI diagnosis. Bag specimens are unreliable due to high contamination rates from perineal flora — a positive culture from a bag specimen cannot reliably diagnose UTI and may lead to unnecessary antibiotic treatment. Options A, B, and D all describe bag or contaminated collection methods that are explicitly contraindicated for diagnostic urine culture in diapered infants. The catheter specimen provides an uncontaminated, accurate sample.",
    trap: "Bag specimens seem less invasive and convenient — but they have unacceptably high false-positive rates in infants, making catheterization the clinical standard despite discomfort."
  },
  {
    id: "m8_18",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "UTI — most common organism",
    stem: "A urine culture from a 5-year-old girl with dysuria, frequency, and urgency is positive. The nurse correctly anticipates that the MOST likely organism responsible is:",
    options: [
      "A. Staphylococcus aureus",
      "B. Klebsiella pneumoniae",
      "C. Escherichia coli",
      "D. Group A Streptococcus"
    ],
    correct: ["C"],
    rationale: "E. coli accounts for more than 80% of UTIs in children. It ascends from the perineum (a shorter distance in females than males) through the urethra to the bladder. This is a high-frequency fact in pediatric nursing: E. coli = most common UTI pathogen by a wide margin. Option A (S. aureus) is a skin organism associated with sepsis, wound infections, and endocarditis, not typical UTI. Option B (Klebsiella) causes UTIs in immunocompromised or catheter-dependent patients but is not the most common in children. Option D (Group A Strep) causes pharyngitis and impetigo, not UTI.",
    trap: "Students may choose Klebsiella because they associate it with hospital-acquired infections — but in community pediatric UTI, E. coli is the pathogen more than 80% of the time."
  },
  {
    id: "m8_19",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "UTI — VUR and pyelonephritis",
    stem: "A 2-year-old girl has her second UTI in 6 months, both treated successfully with oral antibiotics. The nurse anticipates which follow-up imaging is now most appropriate?",
    options: [
      "A. MRI of the abdomen to evaluate for renal masses",
      "B. Renal ultrasound followed by VCUG if structural concern is identified, to evaluate for vesicoureteral reflux",
      "C. No imaging is indicated in children under 5 years — recurrent UTI is expected",
      "D. VCUG immediately without prior ultrasound — VUR must be ruled out before any further antibiotic treatment"
    ],
    correct: ["B"],
    rationale: "Vesicoureteral reflux (VUR) is the most common cause of pyelonephritis in children and can cause renal scarring if undetected. After a first UTI, a renal ultrasound evaluates structural anatomy. VCUG (voiding cystourethrogram) is added if the ultrasound shows abnormalities or in the setting of recurrent UTIs. Option A (MRI) is not indicated for UTI workup. Option C is wrong — recurrent UTI in children is not expected and warrants structural evaluation. Option D reverses the sequence — VCUG without initial ultrasound is not the standard approach; ultrasound provides initial anatomical information.",
    trap: "With recurrent UTI, students may think the same antibiotic course is the answer — but structural causes like VUR must be evaluated to prevent ongoing kidney damage."
  },
  {
    id: "m8_20",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "UTI — antibiotic timing and bedtime dosing",
    stem: "A nurse is teaching the parents of a 7-year-old girl who has just been diagnosed with an uncomplicated lower UTI. The child takes her medications reliably and is fully continent through the night. Which teaching point is MOST appropriate regarding antibiotic administration?",
    options: [
      "A. Give the antibiotic with breakfast and dinner to maximize absorption with food",
      "B. Give the antibiotic at bedtime to allow the drug to remain in the bladder longer overnight",
      "C. IV antibiotics are required for all UTIs in school-age children to ensure adequate urinary drug levels",
      "D. The antibiotic should be held until the culture sensitivity results return in 48 hours"
    ],
    correct: ["B"],
    rationale: "For children who remain continent through the night (bladder filling is prolonged), giving the antibiotic dose at bedtime allows higher drug concentration in the urine to remain in the bladder for the longest period — maximizing local antibacterial effect. This is the professor-specified teaching point for UTI antibiotic administration. Option A (breakfast/dinner timing) is a general food interaction principle but misses the specific clinical rationale for UTI. Option C is wrong — oral antibiotics are appropriate for uncomplicated lower UTI in otherwise healthy school-age children; IV is for pyelonephritis or infants <2 months. Option D is wrong — treatment is initiated empirically while awaiting culture results to prevent ascending infection.",
    trap: "Giving medication with meals is a general principle students recall — the specific rationale for bedtime dosing in continent children is to maximize bladder contact time, which is the testable UTI-specific teaching."
  },
  {
    id: "m8_21",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "UTI — risk factor by sex and circumcision status",
    stem: "A nurse is teaching a group of nursing students about UTI risk in pediatric patients. Which statement about UTI risk is CORRECT?",
    options: [
      "A. Circumcised males have the highest UTI risk in the pediatric population",
      "B. Female sex carries the highest UTI risk; uncircumcised males have higher risk than circumcised males",
      "C. UTI risk is equal between males and females after age 2 years",
      "D. Uncircumcised males have the lowest UTI risk in the pediatric population"
    ],
    correct: ["B"],
    rationale: "Female children have the highest UTI risk due to shorter urethra and closer proximity of the urethral meatus to the rectum. Among males, uncircumcised males have the second-highest risk due to the periurethral area under the foreskin harboring bacteria. Circumcised males have the lowest risk. The correct hierarchy is: females > uncircumcised males > circumcised males. Options A and D reverse the male hierarchy. Option C is incorrect — females maintain higher UTI risk throughout childhood and beyond.",
    trap: "Students may think circumcision status doesn't affect UTI risk — but the difference in periurethral bacterial colonization between uncircumcised and circumcised males is clinically significant and testable."
  },
  {
    id: "m8_22",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Nephrotic syndrome — GFR comparison to AGN",
    stem: "A nurse is comparing the laboratory findings of a child with MCNS and a child with AGN. Which statement about GFR is CORRECT?",
    options: [
      "A. Both conditions cause decreased GFR — glomerular inflammation reduces filtration in both",
      "B. AGN causes decreased GFR from glomerular inflammation; nephrotic syndrome typically has normal or increased GFR",
      "C. Nephrotic syndrome causes severely decreased GFR leading to oliguria and hyperkalemia in all patients",
      "D. GFR is not a useful discriminating factor between the two conditions"
    ],
    correct: ["B"],
    rationale: "In AGN, immune complex deposition causes glomerular inflammation that directly impairs filtration — GFR drops, leading to oliguria, fluid retention, and hyperkalemia. In nephrotic syndrome (MCNS specifically), the primary defect is loss of the charge barrier causing protein leak — the mechanical filtration mechanism is largely intact, so GFR is usually normal or even elevated. This is a key discrimination point: oliguria and hyperkalemia (from reduced GFR) are AGN concerns; nephrotic syndrome oliguria is from low intravascular volume (not reduced filtration). Option A incorrectly applies reduced GFR to nephrotic syndrome as a constant finding. Option C exaggerates the GFR impact in nephrotic. Option D is wrong — GFR direction is a testable discriminating feature.",
    trap: "Both conditions have oliguria, so students assume both have reduced GFR — in nephrotic syndrome the oliguria is from low intravascular volume (the fluid left the vessels), not from impaired filtration."
  },
  {
    id: "m8_23",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Correct nursing interventions for AGN",
    stem: "A nurse is caring for a 7-year-old with post-streptococcal AGN who has hypertension (BP 148/94), gross hematuria, oliguria, and bilateral periorbital edema. Which nursing interventions are APPROPRIATE? SELECT ALL THAT APPLY.",
    options: [
      "A. Monitor blood pressure every 4 hours and administer antihypertensives as ordered",
      "B. Administer prednisone 2 mg/kg/day as ordered to suppress the inflammatory process",
      "C. Restrict dietary potassium while the patient remains oliguric",
      "D. Restrict dietary sodium to reduce fluid retention and edema",
      "E. Encourage a high-protein diet to replace the protein being lost in the urine"
    ],
    correct: ["A", "C", "D"],
    rationale: "BP monitoring and antihypertensives (A) address renin-mediated hypertension, the primary cardiovascular risk in AGN. Potassium restriction during oliguria (C) is mandatory — impaired renal excretion causes hyperkalemia risk. Sodium restriction (D) reduces fluid retention and edema. Option B is wrong — prednisone is the treatment for NEPHROTIC SYNDROME; AGN is managed supportively with antihypertensives, diuretics, and antibiotics, not steroids. Option E is wrong — a high-protein diet is not indicated in AGN; protein should be moderate; protein restriction may be used in some cases of renal impairment, and high protein would not address AGN management.",
    trap: "Prednisone is an anti-inflammatory and AGN is inflammatory — but corticosteroids are the treatment for NEPHROTIC SYNDROME; AGN requires supportive management only."
  },
  {
    id: "m8_24",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Correct discharge teaching for nephrotic syndrome parent",
    stem: "The nurse is providing discharge teaching to the parents of a 4-year-old with nephrotic syndrome who is being discharged on prednisone. Which teaching points are CORRECT? SELECT ALL THAT APPLY.",
    options: [
      "A. Report any signs of fever or infection immediately — the child is at increased infection risk from protein loss and steroid use",
      "B. The child must remain at home; school attendance is prohibited for the duration of steroid therapy",
      "C. Report sudden unilateral leg swelling or difficulty breathing — these may indicate blood clot formation",
      "D. Expect increased appetite, mild weight gain, and mood changes as expected short-term side effects",
      "E. Steroid doses should be stopped immediately if the child develops any behavior changes"
    ],
    correct: ["A", "C", "D"],
    rationale: "Infection reporting (A) is critical — protein loss decreases IgG and steroids suppress immunity, creating compounded infection risk. DVT/PE teaching (C) is confirmed professor exam content — nephrotic syndrome creates hypercoagulable state from antithrombin III/protein C/S losses; parents must recognize warning signs. Short-term steroid side effect teaching (D) prepares families for expected changes and prevents medication discontinuation. Option B is wrong — home care is preferred and school attendance is allowed; the child should simply avoid ill contacts. Option E is dangerous — abrupt corticosteroid discontinuation can cause adrenal insufficiency; behavior changes are expected side effects, not a reason to stop.",
    trap: "Behavior changes on steroids sound alarming and parents may want to stop the medication — corticosteroid tapering must never be done abruptly by families; behavior change is an expected side effect requiring support, not drug cessation."
  },
  {
    id: "m8_25",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Signs of nephrotic syndrome",
    stem: "A nurse is assessing a 3-year-old boy referred for evaluation. Which clinical findings are consistent with nephrotic syndrome? SELECT ALL THAT APPLY.",
    options: [
      "A. Frothy, foamy urine",
      "B. Hypertension (BP 142/88)",
      "C. Generalized edema involving the scrotum and abdomen",
      "D. Polyuria (greatly increased urine output)",
      "E. Serum albumin 1.7 g/dL"
    ],
    correct: ["A", "C", "E"],
    rationale: "Frothy urine (A) is the hallmark of massive proteinuria — protein acts as a surfactant. Generalized edema including scrotal and abdominal (C) results from low oncotic pressure from hypoalbuminemia. Hypoalbuminemia (serum albumin 1.7, E) is a defining lab finding of nephrotic syndrome (<2.5 g/dL). Option B (hypertension) is a hallmark of AGN, not nephrotic syndrome — in nephrotic syndrome BP is typically normal or LOW. Option D (polyuria) is incorrect — nephrotic syndrome causes DECREASED urine output from hypovolemia and secondary aldosterone activation; polyuria is not a feature.",
    trap: "These two professor-confirmed SATA traps are from the exam-style-log: polyuria (UO is decreased in nephrotic) and hypertension (BP is normal or low) — both are features of AGN, not nephrotic syndrome."
  },
  {
    id: "m8_26",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Appropriate UTI specimen collection",
    stem: "A nurse receives orders to collect a urine specimen for culture and sensitivity on a febrile 5-month-old infant with suspected UTI. Which nursing actions are CORRECT? SELECT ALL THAT APPLY.",
    options: [
      "A. Perform a sterile urethral catheterization using the smallest appropriate catheter",
      "B. Apply a urine collection bag to the perineum after cleaning — this is the least invasive and equally accurate method",
      "C. Document the collection method on the lab requisition",
      "D. Send the specimen to the lab within 30 minutes or refrigerate to prevent bacterial overgrowth",
      "E. Collect the specimen from the diaper immediately after the infant voids"
    ],
    correct: ["A", "C", "D"],
    rationale: "Sterile urethral catheterization (A) is the required collection method for infants — accurate, uncontaminated specimen for culture. Documenting the collection method (C) is required so the laboratory can interpret the result appropriately and flag contamination if bag collection was used. Timely processing or refrigeration (D) prevents bacterial overgrowth that would falsely elevate colony counts. Option B is wrong — bag specimens have unacceptably high contamination rates in infants and cannot reliably diagnose UTI; this is explicitly taught as an error in pediatric UTI management. Option E (diaper collection) is equally unreliable — diapers contaminate the specimen with perineal flora.",
    trap: "Bag collection is taught as 'less invasive' and seems humane for an infant — but it is contraindicated for diagnosis because contamination rates make culture results meaningless."
  },
  {
    id: "m8_27",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Appropriate interventions for oliguric patient with AGN",
    stem: "A 7-year-old with AGN has a urine output of 0.4 mL/kg/hr (oliguria). Current labs show potassium 5.6 mEq/L, sodium 138 mEq/L, and BP 136/88. Which nursing interventions are appropriate at this time? SELECT ALL THAT APPLY.",
    options: [
      "A. Place the child on continuous cardiac monitoring for peaked T waves",
      "B. Continue dietary potassium restriction",
      "C. Encourage high potassium foods such as bananas and oranges to maintain electrolyte balance",
      "D. Administer antihypertensive medication as ordered",
      "E. Administer diuretics as ordered to increase urine output and reduce edema"
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "Cardiac monitoring (A) is indicated because K+ 5.6 is elevated and oliguria means potassium cannot be excreted — peaked T waves are the first ECG sign of hyperkalemia, which can progress to fatal dysrhythmia. Continuing potassium restriction (B) is essential while the patient remains oliguric — the kidneys cannot excrete K+. Antihypertensives (D) address renin-mediated hypertension. Diuretics (E) increase urine output, promoting edema reduction and potassium excretion. Option C is directly contraindicated — with K+ of 5.6 and oliguria, adding high-potassium foods would worsen hyperkalemia and risk cardiac arrest.",
    trap: "Potassium of 5.6 is mildly elevated but students may not think it requires cardiac monitoring yet — in a child with OLIGURIC kidneys, K+ will continue to rise without intervention, making monitoring and restriction urgent."
  },
  {
    id: "m8_28",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "AGN — hospitalization indications",
    stem: "A nurse is triaging four children in the ED. Which child with suspected AGN requires immediate hospitalization?",
    options: [
      "A. A 6-year-old with mild periorbital edema, positive ASO titer, and normal urine output of 1.8 mL/kg/hr",
      "B. An 8-year-old with tea-colored urine, BP of 148/96, and urine output of 0.4 mL/kg/hr",
      "C. A 7-year-old with positive ASO titer, normal BP, and mild periorbital swelling that resolves by afternoon",
      "D. A 9-year-old with decreased C3 complement and mild fatigue with no other findings"
    ],
    correct: ["B"],
    rationale: "Hospitalization for AGN is indicated when oliguria (urine output <0.5 mL/kg/hr — Child B has 0.4), hypertension (BP 148/96 is significantly elevated), and gross hematuria are present. Any ONE of these findings is sufficient for admission. This child has at least two (oliguria + hypertension + hematuria), making immediate hospitalization clearly indicated. Option A has adequate UO and mild edema without BP elevation — may be managed outpatient with monitoring. Option C has normal BP and resolving mild edema — not meeting hospitalization criteria. Option D has only lab findings and mild fatigue without the clinical indicators that mandate admission.",
    trap: "Students may think AGN always requires hospitalization — only the triad of oliguria, hypertension, and gross hematuria (any one present) mandates admission; mild presentations can be monitored outpatient."
  },
  {
    id: "m8_29",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "UTI — toddler vs. school-age presentation",
    stem: "A parent brings a 3-year-old to the clinic. The parent reports the child cries when urinating and the diaper has had an unusual odor for 2 days. Temperature is 38.4°C. A school-age sibling (8 years) complains of painful urination, frequent trips to the bathroom, and lower abdominal pressure. Which interpretation of these presentations is CORRECT?",
    options: [
      "A. The 3-year-old's presentation is atypical for UTI; toddlers do not develop UTI",
      "B. Both children present with classic age-appropriate UTI symptoms — the toddler with malodorous urine and fever, the school-age child with the adult-pattern dysuria and frequency",
      "C. Only the school-age child should be evaluated for UTI; toddler symptoms are consistent with constipation",
      "D. Both children require IV antibiotic therapy — UTI in children under 10 years always warrants IV treatment"
    ],
    correct: ["B"],
    rationale: "UTI presentation varies by age: toddlers typically present with malodorous urine, fever, and crying with urination (not classic dysuria/urgency). School-age children present with adult-pattern symptoms — dysuria, frequency, urgency, and suprapubic pain. Both presentations here are textbook for their respective age groups. Option A is wrong — UTI is very common in toddlers. Option C is wrong — malodorous urine and fever in a toddler who cries with urination are classic UTI signs. Option D is wrong — IV antibiotics are reserved for pyelonephritis or infants <2 months; both children described have uncomplicated presentations suitable for oral antibiotic treatment.",
    trap: "Toddlers cannot say 'it burns when I pee' — the presentation is behavioral (crying with urination) and systemic (fever, malodorous urine), which students unfamiliar with age-based presentation may underrecognize."
  },
  {
    id: "m8_30",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Nephrotic syndrome — hyperlipidemia mechanism",
    stem: "A nurse is reviewing labs for a 5-year-old with nephrotic syndrome and notes cholesterol of 310 mg/dL and triglycerides of 280 mg/dL. The parent asks why their child's cholesterol is high. The nurse's BEST explanation is:",
    options: [
      "A. 'The steroids we started last week are causing liver damage, which releases excess cholesterol.'",
      "B. 'The liver compensates for the protein loss by increasing lipoprotein production, raising cholesterol and triglycerides.'",
      "C. 'High-fat foods in your child's diet are elevating the cholesterol — dietary restriction is the main treatment.'",
      "D. 'The kidneys are retaining dietary fats because they cannot filter lipoproteins properly.'"
    ],
    correct: ["B"],
    rationale: "In nephrotic syndrome, the liver responds to low serum albumin (the protein signal of hypoproteinemia) by increasing overall protein synthesis — including lipoproteins. This hepatic compensatory lipoprotein overproduction causes hyperlipidemia and lipiduria. The hyperlipidemia is a secondary effect of the protein loss, not dietary intake. Option A is wrong — this hyperlipidemia is not steroid-induced hepatotoxicity; it is a direct consequence of nephrotic syndrome itself. Option C is wrong — dietary fat restriction may help symptomatically but is not the primary mechanism of the hyperlipidemia. Option D describes an incorrect mechanism — the kidneys do not filter lipoproteins.",
    trap: "Students who know steroids can cause metabolic changes may attribute the hyperlipidemia to prednisone — but the lipid elevation in nephrotic syndrome is a direct consequence of protein loss triggering hepatic lipoprotein synthesis."
  },
  {
    id: "m8_chain1_q1",
    type: "CHAIN",
    chain_id: "m8_chain1",
    chain_scenario: "A 6-year-old boy is admitted to the pediatric unit. His mother reports he had strep throat 2 weeks ago that was treated with one dose of penicillin but she says he stopped taking it after 2 days because he felt better. For the past 3 days he has had puffy eyes every morning that go away by afternoon, dark brown urine that his mother describes as 'like root beer,' decreased urine output (only urinated twice today), and decreased appetite. Vital signs: BP 144/90 mmHg, HR 96 bpm, Temperature 37.4°C, weight 24 kg. Labs: ASO titer positive, C3 complement low, urinalysis shows RBCs and RBC casts, BUN elevated.",
    concept: "AGN — recognition and priority problem identification",
    stem: "The nurse is completing the admission assessment. Which PRIORITY problem does the nurse identify based on these findings?",
    options: [
      "A. Altered nutrition related to decreased appetite and illness",
      "B. Risk for hypertensive emergency and hyperkalemia related to oliguria and elevated blood pressure from AGN",
      "C. Impaired skin integrity related to periorbital edema",
      "D. Knowledge deficit related to incomplete antibiotic course"
    ],
    correct: ["B"],
    rationale: "The priority problem in this child is the combination of hypertension (BP 144/90) and oliguria in the setting of confirmed AGN — this represents risk for hypertensive emergency (which can cause seizures, encephalopathy, and stroke) and hyperkalemia (impaired K+ excretion during oliguria leading to cardiac arrhythmia). These are the life-threatening complications of AGN. Option A (nutrition) is a real concern but not life-threatening. Option C (skin integrity) is a secondary comfort issue. Option D (adherence knowledge) is important for teaching but is not the immediate priority over BP and electrolyte management.",
    trap: "The incomplete antibiotic course is tempting as a priority because it's visible in the history — but once AGN is established, the immediate life threat is hypertensive emergency and hyperkalemia, not ongoing strep infection."
  },
  {
    id: "m8_chain1_q2",
    type: "CHAIN",
    chain_id: "m8_chain1",
    chain_scenario: "A 6-year-old boy is admitted to the pediatric unit. His mother reports he had strep throat 2 weeks ago that was treated with one dose of penicillin but she says he stopped taking it after 2 days because he felt better. For the past 3 days he has had puffy eyes every morning that go away by afternoon, dark brown urine that his mother describes as 'like root beer,' decreased urine output (only urinated twice today), and decreased appetite. Vital signs: BP 144/90 mmHg, HR 96 bpm, Temperature 37.4°C, weight 24 kg. Labs: ASO titer positive, C3 complement low, urinalysis shows RBCs and RBC casts, BUN elevated.",
    concept: "AGN — potassium management during oliguria",
    stem: "Serum potassium returns at 5.9 mEq/L. The nurse places the child on continuous cardiac monitoring. Which dietary and fluid order does the nurse ANTICIPATE and prepare to implement?",
    options: [
      "A. Potassium-rich diet to replace the potassium being lost through the damaged glomeruli",
      "B. Restrict dietary potassium and fluids; hold all potassium-containing IV fluids until urine output normalizes",
      "C. IV potassium replacement at 0.5 mEq/kg/hr to correct the borderline low potassium",
      "D. Encourage high fluid intake to flush the kidneys and dilute the elevated potassium"
    ],
    correct: ["B"],
    rationale: "With oliguria and potassium of 5.9 mEq/L, the kidneys cannot excrete potassium — continuing K+ intake risks hyperkalemia and cardiac dysrhythmia. Dietary potassium restriction and holding K+-containing fluids is mandatory while urine output remains compromised. Fluid restriction is also appropriate in an oliguric patient with hypertension and edema. Option A would cause dangerous hyperkalemia. Option C is wrong — potassium of 5.9 is ELEVATED, not low; IV potassium replacement would worsen hyperkalemia. Option D would exacerbate fluid overload and edema in an already-oliguric, hypertensive child.",
    trap: "K+ of 5.9 is only mildly elevated and students may confuse 'borderline' with 'replace' — in a child with OLIGURIC kidneys, 5.9 will continue to rise without restriction, not normalize spontaneously."
  },
  {
    id: "m8_chain1_q3",
    type: "CHAIN",
    chain_id: "m8_chain1",
    chain_scenario: "A 6-year-old boy is admitted to the pediatric unit. His mother reports he had strep throat 2 weeks ago that was treated with one dose of penicillin but she says he stopped taking it after 2 days because he felt better. For the past 3 days he has had puffy eyes every morning that go away by afternoon, dark brown urine that his mother describes as 'like root beer,' decreased urine output (only urinated twice today), and decreased appetite. Vital signs: BP 144/90 mmHg, HR 96 bpm, Temperature 37.4°C, weight 24 kg. Labs: ASO titer positive, C3 complement low, urinalysis shows RBCs and RBC casts, BUN elevated.",
    concept: "AGN — prognosis teaching and C3 follow-up",
    stem: "On day 3 of admission, the child's urine output has normalized, blood pressure is 118/74, and potassium is 4.1 mEq/L. The mother asks: 'Will my son's kidneys ever be fully normal again, and will we need to come back for any tests?' Which nurse response is MOST accurate?",
    options: [
      "A. 'Post-strep AGN has about a 50% chance of kidney recovery. We will schedule him for a kidney transplant evaluation in 3 months.'",
      "B. 'His kidneys should be fully normal within 6–12 months. We will check his C3 complement at 8 weeks — if it is still low by then, we need to investigate further.'",
      "C. 'Since his urine output and blood pressure are now normal, his kidneys are completely healed and no follow-up is needed.'",
      "D. 'He will need to take prednisone for 12 more weeks to prevent his C3 from staying low permanently.'"
    ],
    correct: ["B"],
    rationale: "Post-strep AGN carries an excellent prognosis — fewer than 1% progress to ESRD and most resolve completely within 6–12 months. The 8-week C3 follow-up is a specific clinical milestone: if C3 has not normalized by 8 weeks, it suggests an ongoing or different glomerular process requiring further investigation. Option A dramatically overstates the risk. Option C is dangerous — normalization of acute symptoms does not confirm complete resolution; follow-up is required and C3 monitoring is specifically indicated. Option D is wrong — prednisone is not indicated for AGN management; corticosteroids are the treatment for nephrotic syndrome.",
    trap: "Because the child is clinically improved, families want to hear 'all done' — but the 8-week C3 follow-up is a non-negotiable monitoring point; dismissing follow-up misses the window to identify a more serious underlying diagnosis."
  }
];

const M9_QUESTIONS = [
  {
    id: "m9_1",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "VSD — most common CHD",
    stem: "A 6-week-old infant is brought to the clinic for a well-child visit. On auscultation, the nurse notes a harsh, loud murmur at the left lower sternal border that is present throughout systole. The infant has been sweating with feedings and gaining weight slowly. Which congenital heart defect is most consistent with these findings?",
    options: [
      "A. Patent ductus arteriosus",
      "B. Coarctation of the aorta",
      "C. Ventricular septal defect",
      "D. Tetralogy of Fallot"
    ],
    correct: ["C"],
    rationale: "VSD produces a holosystolic (pansystolic) murmur loudest at the left lower sternal border due to turbulent flow from the high-pressure LV to the lower-pressure RV throughout systole. Sweating with feeds and poor weight gain are classic HF signs from pulmonary overcirculation. PDA produces a machine-like continuous murmur at the left infraclavicular area, not LLSB. COA produces a murmur on the back (left interscapular area) with upper extremity HTN and weak femoral pulses. TOF causes cyanosis and a systolic ejection murmur from pulmonary stenosis, not a holosystolic LLSB murmur.",
    trap: "PDA murmur is also heard on the left side — students confuse location; PDA is infraclavicular (continuous), VSD is LLSB (holosystolic)."
  },
  {
    id: "m9_2",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "VSD — spontaneous closure",
    stem: "A 4-month-old is diagnosed with a small ventricular septal defect. The infant is feeding well, gaining weight appropriately, and has no signs of heart failure. The parents ask if their child will need surgery. Which response by the nurse is most accurate?",
    options: [
      "A. 'All VSDs require surgical closure before the child turns one year old.'",
      "B. 'Small VSDs often close on their own, particularly in the first two years of life.'",
      "C. 'Your child will need medication to prevent the defect from getting larger.'",
      "D. 'Surgery is planned once the child reaches 10 kilograms of body weight.'"
    ],
    correct: ["B"],
    rationale: "20–60% of small VSDs close spontaneously, especially within the first 2 years of life. This is well-established and an important piece of parent education. Surgical closure is reserved for large or persistent VSDs causing HF or pulmonary hypertension. No medication prevents a VSD from enlarging — medications manage HF symptoms in large VSDs. Weight-based surgical thresholds apply to other corrective procedures but are not the standard teaching for VSD counseling.",
    trap: "Students who know surgery is sometimes needed may select A, not accounting for the size distinction and the high spontaneous closure rate."
  },
  {
    id: "m9_3",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "PDA — machine-like murmur and risk factors",
    stem: "A nurse is caring for a 28-week premature infant in the NICU. The infant develops bounding peripheral pulses, widened pulse pressure, and a continuous murmur heard below the left clavicle. The mother reports she had a viral illness during the first trimester. Which condition is most likely, and which maternal history is a known risk factor?",
    options: [
      "A. VSD; maternal cytomegalovirus infection",
      "B. PDA; maternal rubella infection",
      "C. COA; maternal hypertension during pregnancy",
      "D. TOF; maternal diabetes mellitus"
    ],
    correct: ["B"],
    rationale: "PDA is characterized by a machine-like (continuous) murmur at the left infraclavicular area, bounding pulses, and widened pulse pressure — all present here. Prematurity is the primary risk factor, and maternal rubella infection is a well-documented additional risk factor that significantly increases PDA incidence. VSD is the most common CHD but does not produce a continuous murmur or bounding pulses. COA is associated with upper extremity HTN and absent femoral pulses, not a continuous murmur. TOF is associated with maternal diabetes but presents with cyanosis and an ejection murmur, not a continuous one.",
    trap: "Students may focus on prematurity as the only PDA risk factor and not recognize rubella — the maternal history is the discriminating detail here."
  },
  {
    id: "m9_4",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "PDA — indomethacin mechanism and indication",
    stem: "A 30-week gestational age infant in the NICU is diagnosed with a patent ductus arteriosus. The neonatologist orders indomethacin. The bedside nurse is explaining the medication to a nursing student. Which statement best explains why indomethacin is effective for this patient?",
    options: [
      "A. Indomethacin dilates the pulmonary vasculature, reducing resistance and promoting ductal closure.",
      "B. Indomethacin inhibits prostaglandin synthesis, which removes the stimulus keeping the ductus arteriosus open.",
      "C. Indomethacin increases systemic vascular resistance, forcing blood away from the ductus arteriosus.",
      "D. Indomethacin blocks calcium channels in the smooth muscle of the ductus, causing it to constrict."
    ],
    correct: ["B"],
    rationale: "The ductus arteriosus remains patent when prostaglandin levels are elevated, as seen in premature infants whose lungs produce less oxygen and more prostaglandins. Indomethacin is a COX inhibitor that blocks prostaglandin synthesis, removing the signal that keeps the ductus open and allowing it to close. It does not dilate the pulmonary vasculature — that is the mechanism of prostaglandin E1, which is used to KEEP the ductus open. It does not increase SVR or block calcium channels — those are mechanisms of vasopressors and calcium channel blockers respectively.",
    trap: "PGE1 opens the ductus; indomethacin closes it — students who confuse direction of prostaglandin effect will select A."
  },
  {
    id: "m9_5",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "PDA — indomethacin contraindications",
    stem: "A 32-week infant with a confirmed PDA is being evaluated for indomethacin therapy. Which finding in the infant's chart would cause the nurse to withhold the medication and notify the provider?",
    options: [
      "A. Serum bilirubin of 8 mg/dL",
      "B. Capillary refill of 3 seconds",
      "C. Platelet count of 48,000/mm³ with active gastric bleeding",
      "D. Heart rate of 155 bpm"
    ],
    correct: ["C"],
    rationale: "Indomethacin is contraindicated with active bleeding and thrombocytopenia because it inhibits platelet aggregation (via COX-1) and can worsen hemorrhage, including intraventricular hemorrhage or necrotizing enterocolitis (NEC). A platelet count of 48,000 with active gastric bleeding is a clear contraindication. Elevated bilirubin is a consideration for other drugs but not a contraindication to indomethacin. Capillary refill of 3 seconds is slightly delayed but not a contraindication. Tachycardia is expected in this premature infant and does not contraindicate indomethacin.",
    trap: "Students may focus on the tachycardia as the abnormal vital sign, but the bleeding and low platelet count is the contraindication."
  },
  {
    id: "m9_6",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "COA — classic triad and BP differential",
    stem: "A nurse is assessing a 2-week-old neonate referred for evaluation of suspected cardiac defect. Assessment findings include blood pressure of 92/60 mmHg in both arms and 54/32 mmHg in both legs, absent femoral pulses, and bounding radial pulses. Where would the nurse expect to hear the associated murmur?",
    options: [
      "A. Left lower sternal border",
      "B. Left infraclavicular area",
      "C. Left interscapular area on the back",
      "D. Right upper sternal border"
    ],
    correct: ["C"],
    rationale: "Coarctation of the aorta (COA) classically presents with upper extremity hypertension greater than lower extremity BP, absent/weak femoral pulses, and bounding upper extremity pulses — all present here. The murmur of COA is characteristically heard at the left interscapular area (back), between the shoulder blades — a distinguishing feature that separates it from other CHDs. The left lower sternal border is VSD. The left infraclavicular area is PDA. The right upper sternal border is associated with aortic stenosis in adults.",
    trap: "Students default to precordial murmur locations — the COA murmur is on the back, which is the unique detail tested here."
  },
  {
    id: "m9_7",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "COA — prostaglandin E1 in neonates",
    stem: "A neonate is diagnosed with severe coarctation of the aorta. Echocardiogram shows the coarctation is ductal-dependent for lower body perfusion. Surgical repair is planned but not immediately available. Which medication does the nurse anticipate administering while awaiting surgery?",
    options: [
      "A. Indomethacin to close the ductus and reduce shunting",
      "B. Furosemide to reduce pulmonary venous congestion",
      "C. Prostaglandin E1 to maintain ductal patency and preserve lower body perfusion",
      "D. Sildenafil to reduce pulmonary artery pressure"
    ],
    correct: ["C"],
    rationale: "In ductal-dependent COA, the ductus arteriosus is the only pathway providing blood flow to the lower body. PGE1 (alprostadil) maintains ductal patency by keeping prostaglandin levels elevated, sustaining perfusion to the lower extremities until surgical repair is performed. Indomethacin would CLOSE the ductus — catastrophic in this patient, as it would completely cut off lower body perfusion. Furosemide addresses pulmonary congestion but does nothing to maintain perfusion to the lower body. Sildenafil treats pulmonary arterial hypertension, not ductal-dependent obstruction.",
    trap: "Indomethacin and PGE1 have opposite effects on the ductus — giving indomethacin here would be a fatal error that students who mix up the two drugs would make."
  },
  {
    id: "m9_8",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "COA — post-op hypertension management",
    stem: "A 6-month-old returns from the OR following surgical repair of coarctation of the aorta. The nurse notes blood pressure of 118/74 mmHg (significantly elevated for age) on the post-operative assessment. Which medication does the nurse anticipate the provider will order?",
    options: [
      "A. Dopamine infusion to increase cardiac output",
      "B. IV sodium nitroprusside or esmolol for acute hypertension management",
      "C. IV digoxin to slow the heart rate and reduce BP",
      "D. Oral furosemide to reduce fluid volume and lower blood pressure"
    ],
    correct: ["B"],
    rationale: "Post-operative hypertension is a common and dangerous complication after COA repair, caused by reactive vasospasm and continued activation of the renin-angiotensin system. IV sodium nitroprusside (vasodilator) or esmolol (beta-blocker) are first-line agents for acute post-op hypertension control. Long-term management transitions to oral ACE inhibitors or beta blockers. Dopamine increases BP and heart rate — contraindicated here. Digoxin slows conduction and increases contractility but is not an antihypertensive agent. Oral furosemide acts too slowly for acute post-op hypertension control.",
    trap: "Students who think 'diuretic = BP control' may select furosemide, but acute post-op HTN requires IV vasoactive agents, not diuresis."
  },
  {
    id: "m9_9",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "4-extremity BP rules",
    stem: "A nurse in the newborn nursery measures blood pressure in all four extremities of a healthy 2-day-old neonate as part of routine screening. The right arm reads 72/48 mmHg, left arm 70/46 mmHg, right leg 68/44 mmHg, and left leg 71/47 mmHg. How should the nurse interpret these findings?",
    options: [
      "A. The lower extremity readings are abnormally low; notify the provider for possible coarctation of the aorta.",
      "B. These findings are normal; in infants under 1 year, all four extremity pressures should be equal.",
      "C. The upper extremity readings are too high; this pattern is consistent with pulmonary hypertension.",
      "D. The right-to-left arm difference is abnormal; this suggests subclavian artery stenosis."
    ],
    correct: ["B"],
    rationale: "In infants under 1 year of age, blood pressure should be approximately equal in all four extremities. The gravity differential and muscle mass difference that causes lower extremities to be 10–40 mmHg higher than upper extremities does not develop until after 1 year of age. The readings here are symmetric and within a few mmHg of each other — entirely normal for a neonate. COA would show upper extremity pressures significantly exceeding lower extremity pressures. The values here do not suggest pulmonary hypertension or subclavian stenosis.",
    trap: "Students who know the >1-year rule (legs higher than arms) may incorrectly apply it to a neonate and flag these normal symmetric readings."
  },
  {
    id: "m9_10",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Infant HR dependency — fixed stroke volume",
    stem: "During a cardiology clinic visit, the nurse is educating parents about why heart rate monitoring is especially critical in infants with congenital heart disease. Which explanation best reflects the physiologic basis for this priority?",
    options: [
      "A. Infants have larger stroke volumes than adults, making them more dependent on heart rate to adjust cardiac output.",
      "B. Infants have a fixed stroke volume due to less compliant myocardium, so cardiac output depends almost entirely on heart rate.",
      "C. Infants are more susceptible to systemic vascular resistance changes, making heart rate a compensatory mechanism.",
      "D. Infant cardiac output is primarily determined by preload, which is reflected in the heart rate."
    ],
    correct: ["B"],
    rationale: "Infant myocardium is less contractile and less compliant than adult myocardium, resulting in a fixed stroke volume that cannot be significantly increased on demand. Because CO = HR × SV and SV is fixed, cardiac output can only be increased by increasing heart rate. This makes HR the primary indicator of cardiac status and compensation in infants. Infants do not have larger stroke volumes — the opposite is true. SVR changes affect afterload, not the HR-CO relationship described. Preload affects SV in adults (Frank-Starling mechanism) but infant myocardium cannot utilize this effectively.",
    trap: "Students may confuse the Frank-Starling mechanism (preload → SV) and try to apply it to infants — but infant myocardium cannot increase SV through preload changes."
  },
  {
    id: "m9_11",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Infant bradycardia — when to start CPR",
    stem: "A nurse is caring for a 3-month-old infant with a large VSD following a suctioning procedure. The cardiac monitor shows a heart rate of 55 bpm. The infant is pale, limp, and not breathing effectively. What is the nurse's priority action?",
    options: [
      "A. Apply a nasal cannula at 2 L/min and recheck the heart rate in 2 minutes.",
      "B. Call a rapid response and prepare to initiate cardiopulmonary resuscitation.",
      "C. Administer atropine 0.02 mg/kg IV for vagally-mediated bradycardia.",
      "D. Place the infant in a knee-chest position to increase systemic vascular resistance."
    ],
    correct: ["B"],
    rationale: "In infants, CPR is initiated when HR is below 60 bpm, or when HR is 60–80 bpm with inadequate ventilation. This infant has HR of 55 bpm with signs of hemodynamic compromise (pallor, limpness, ineffective breathing) — CPR is indicated. Calling a rapid response while beginning resuscitation is the priority. Low-flow nasal cannula is insufficient; this infant needs bag-mask ventilation and chest compressions immediately. Atropine may be used for vagally-mediated bradycardia as a secondary intervention, but the first action is CPR, not drug administration. Knee-chest position is for TET spells in TOF, not for bradycardic arrest.",
    trap: "Students may reach for atropine as the first drug response to bradycardia — but the threshold for infant CPR (HR <60) has already been crossed; resuscitation comes first."
  },
  {
    id: "m9_12",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "TOF — four defects and pathophysiology",
    stem: "A 4-month-old infant is diagnosed with Tetralogy of Fallot. The parents ask why their baby turns blue. The nurse's explanation should be based on which pathophysiologic mechanism?",
    options: [
      "A. Left ventricular failure causes blood to back up into the pulmonary veins, reducing oxygenation.",
      "B. Pulmonary stenosis obstructs right ventricular outflow, raising RV pressure above LV pressure and forcing deoxygenated blood through the VSD into systemic circulation.",
      "C. The ductus arteriosus fails to close, allowing oxygenated blood to mix with deoxygenated blood in the pulmonary artery.",
      "D. The aorta arises from the right ventricle, directly receiving deoxygenated blood and pumping it into systemic circulation."
    ],
    correct: ["B"],
    rationale: "In TOF, pulmonary stenosis creates obstruction to RV outflow, causing RV pressure to rise above LV pressure. This pressure gradient drives deoxygenated blood from the RV through the VSD into the LV and out the overriding aorta — an R→L shunt producing cyanosis. Left ventricular failure (pulmonary venous congestion) causes tachypnea and crackles, not cyanosis from deoxygenated blood. PDA creates an L→R shunt (oxygenated to pulmonary artery), not cyanosis. The aorta overrides the VSD in TOF but receives blood from both ventricles — it does not arise solely from the RV (that is transposition of the great arteries).",
    trap: "Option D confuses TOF (overriding aorta) with transposition of the great arteries — the aorta overrides the septum, not fully arising from the RV."
  },
  {
    id: "m9_13",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "TOF — boot-shaped heart and polycythemia",
    stem: "A chest X-ray on a 5-month-old with known Tetralogy of Fallot shows a boot-shaped cardiac silhouette. Laboratory results show hemoglobin of 19.2 g/dL and hematocrit of 58%. The nurse understands these findings reflect which compensatory mechanism?",
    options: [
      "A. Left ventricular hypertrophy from systemic hypertension causing the cardiac silhouette change, and hemodilution from increased plasma volume causing elevated hemoglobin.",
      "B. Right ventricular hypertrophy from increased RV workload causing the boot shape, and polycythemia as the body produces more RBCs to compensate for chronic hypoxemia.",
      "C. Pulmonary overcirculation causing cardiomegaly, and polycythemia from iron supplementation.",
      "D. Right atrial enlargement causing the boot shape, and polycythemia from dehydration."
    ],
    correct: ["B"],
    rationale: "The boot-shaped cardiac silhouette in TOF is caused by severe right ventricular hypertrophy, which enlarges and elevates the RV, tilting the cardiac apex upward to create the classic boot shape on CXR. Polycythemia (high RBC count) is a compensatory response to chronic hypoxemia — the body produces more erythrocytes to increase oxygen-carrying capacity. This makes the blood more viscous and increases stroke risk. Left ventricular hypertrophy and hemodilution are not features of TOF. Pulmonary overcirculation causes cardiomegaly in acyanotic CHDs (VSD, PDA), not in TOF which has pulmonary undercirculation. Dehydration-related polycythemia does not explain the hemoglobin of 19.",
    trap: "Students may think the high hemoglobin is a problem to fix — it is a compensatory response and expected in TOF; treating it inappropriately could reduce O2 delivery."
  },
  {
    id: "m9_14",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "TET spell — correct interventions",
    stem: "A 6-month-old with Tetralogy of Fallot is crying inconsolably during a diaper change and suddenly becomes deeply cyanotic, agitated, and hyperpneic. The nurse recognizes this as a hypercyanotic (TET) spell. Which interventions are appropriate? Select all that apply.",
    options: [
      "A. Place the infant in the knee-chest position immediately.",
      "B. Apply high-flow oxygen via face mask.",
      "C. Administer IV morphine to reduce hyperpnea and anxiety.",
      "D. Give a rapid IV fluid bolus of 20 mL/kg normal saline.",
      "E. Administer IV propranolol to reduce infundibular spasm."
    ],
    correct: ["A", "B", "C", "E"],
    rationale: "Correct interventions for TET spell: (A) Knee-chest position is FIRST — it increases SVR by compressing the femoral arteries, which forces blood into the pulmonary circulation and reduces R→L shunting. (B) High-flow O2 is applied to maximize oxygen delivery to the blood reaching the lungs. (C) Morphine reduces hyperpnea (which worsens the spell by decreasing intrathoracic pressure) and anxiety. (E) Propranolol reduces infundibular (subpulmonary) spasm that contributes to outflow obstruction. Option D is WRONG: the IV fluid bolus for TET spell is small — 5–10 mL/kg, NOT 20 mL/kg. A large bolus of 20 mL/kg is the standard sepsis/hypovolemia bolus and would cause volume overload in this infant with structural cardiac disease.",
    trap: "20 mL/kg is the reflexive IV fluid bolus dose students memorize — in TET spell, the correct dose is 5–10 mL/kg; giving 20 mL/kg risks volume overload."
  },
  {
    id: "m9_15",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "TET spell — knee-chest mechanism",
    stem: "During a TET spell, the nurse places a 7-month-old with Tetralogy of Fallot into the knee-chest position before any other intervention. A nursing student asks why position is the first action rather than giving oxygen. Which explanation is most accurate?",
    options: [
      "A. The knee-chest position opens the airway and prevents aspiration during the hyperpneic episode.",
      "B. The knee-chest position increases systemic vascular resistance by compressing the femoral vessels, which raises LV pressure above RV pressure and reverses the right-to-left shunt.",
      "C. The knee-chest position reduces venous return to the right heart, lowering RV pressure and decreasing right-to-left shunting.",
      "D. The knee-chest position expands the lungs and increases tidal volume, correcting the hyperpnea."
    ],
    correct: ["B"],
    rationale: "Knee-chest position compresses the femoral arteries and veins, increasing systemic vascular resistance (SVR). The higher SVR raises systemic blood pressure and LV pressure, which reverses the pressure gradient across the VSD — from R→L back toward L→R — forcing more blood into the pulmonary circulation and reducing cyanosis. This is a mechanical intervention targeting the shunt physiology directly, which is why it is performed before oxygen administration. The position does not primarily affect airway patency, venous return in the described way (it actually may modestly increase venous return), or lung expansion.",
    trap: "Students who know O2 is part of treatment assume it comes first — position changes the shunt direction; O2 alone cannot fix an R→L shunt."
  },
  {
    id: "m9_16",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "PAH complication — sildenafil",
    stem: "A 3-year-old with an unrepaired large ventricular septal defect is diagnosed with pulmonary arterial hypertension. The cardiologist adds sildenafil to the medication regimen. The nurse explains to the parents that this medication works by which mechanism?",
    options: [
      "A. Sildenafil closes the ventricular septal defect by promoting tissue growth across the defect.",
      "B. Sildenafil inhibits prostaglandin synthesis, reducing inflammation in the pulmonary vasculature.",
      "C. Sildenafil inhibits phosphodiesterase-5, causing vasodilation of the pulmonary vasculature and reducing pulmonary artery pressure.",
      "D. Sildenafil blocks alpha-adrenergic receptors in the pulmonary arteries, reducing vasoconstriction."
    ],
    correct: ["C"],
    rationale: "Sildenafil is a phosphodiesterase-5 (PDE5) inhibitor that prevents breakdown of cGMP in pulmonary vascular smooth muscle cells, prolonging the vasodilatory effect of nitric oxide and reducing pulmonary vascular resistance. This lowers pulmonary artery pressure, which is the goal in PAH complicating an unrepaired L→R shunt. It does not close VSDs — that is surgical or catheter-based. It does not inhibit prostaglandins — that is indomethacin's mechanism. It does not block alpha-adrenergic receptors — that is the mechanism of alpha blockers like phentolamine.",
    trap: "Students may confuse sildenafil with indomethacin since both affect vascular tone — but their mechanisms and targets are completely different."
  },
  {
    id: "m9_17",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "H2 blocker — IV administration safety",
    stem: "A nurse is preparing to administer cimetidine 300 mg IV to a 10-year-old with a duodenal ulcer. Which action is most important during administration?",
    options: [
      "A. Administer the dose as a rapid IV push over 30 seconds to maximize drug effectiveness.",
      "B. Give the medication on an empty stomach to maximize absorption.",
      "C. Infuse the medication slowly over at least 15–20 minutes to prevent bradycardia.",
      "D. Hold the dose if the patient's heart rate is below 90 bpm."
    ],
    correct: ["C"],
    rationale: "Rapid IV administration of H2 blockers, particularly cimetidine, can cause bradycardia and hypotension. The medication must be infused slowly — typically diluted and given over 15–20 minutes IV, or via slow IV push per facility protocol. This is a critical administration safety point. Rapid IV push over 30 seconds would increase the risk of cardiac adverse effects. IV cimetidine is not affected by food — the oral form is given with food or at bedtime, not the IV form. The hold parameter of HR <90 applies to digoxin in infants, not to H2 blockers.",
    trap: "Students may apply the digoxin hold parameter (HR <90 for infants) to this drug — the safety concern for H2 blockers is slow IV infusion, not a heart rate threshold."
  },
  {
    id: "m9_18",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "H2 blocker — drug interactions (cimetidine)",
    stem: "A 14-year-old with a seizure disorder and a gastric ulcer is started on cimetidine. The nurse reviews the medication list and identifies a drug interaction requiring provider notification. Which medication on the patient's current list is most concerning?",
    options: [
      "A. Acetaminophen 325 mg every 6 hours PRN",
      "B. Phenytoin 200 mg twice daily",
      "C. Omeprazole 20 mg daily",
      "D. Ondansetron 4 mg every 8 hours PRN"
    ],
    correct: ["B"],
    rationale: "Cimetidine inhibits the cytochrome P450 enzyme system and significantly increases serum levels of phenytoin (an anticonvulsant with a narrow therapeutic index). This interaction can lead to phenytoin toxicity — ataxia, nystagmus, confusion, and seizures paradoxically worsening. The provider must be notified so phenytoin levels can be monitored or an alternative H2 blocker (e.g., famotidine, which has fewer CYP450 interactions) can be substituted. Acetaminophen does not have a clinically significant interaction with cimetidine. Omeprazole and cimetidine are both acid-reducing agents; using them together is redundant but not a toxicity concern. Ondansetron does not have a major interaction with cimetidine.",
    trap: "Students who know cimetidine interacts with warfarin may not recall the phenytoin interaction — both are correct, but phenytoin is the dangerous one here given the seizure disorder."
  },
  {
    id: "m9_19",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "PPI — administration timing and mechanism",
    stem: "A nurse is discharging a 12-year-old with erosive esophagitis who will be taking omeprazole at home. Which instruction is most important for the nurse to include?",
    options: [
      "A. Take the medication at bedtime to maximize acid suppression during sleep.",
      "B. Take the medication with an antacid to enhance absorption.",
      "C. Take the medication once daily before the first meal of the day.",
      "D. The medication can be stopped abruptly once symptoms resolve."
    ],
    correct: ["C"],
    rationale: "PPIs inhibit H+/K+ ATPase (the proton pump) in the parietal cells, but only when the pump is actively secreting acid. The pump is most active after a meal. Taking the PPI 30–60 minutes before the first meal ensures the drug reaches peak plasma levels when the pumps are activated by food intake, maximizing efficacy. Taking it at bedtime misses peak meal-stimulated pump activation. Antacids should NOT be taken with PPIs — they can impair absorption and alter gastric pH. Stopping abruptly can cause rebound acid hypersecretion; the medication should be tapered.",
    trap: "Bedtime dosing is correct for H2 blockers — students mix up H2 blocker and PPI timing; PPIs go before the first meal, not at bedtime."
  },
  {
    id: "m9_20",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "PPI — patient teaching",
    stem: "A nurse is providing discharge teaching to the parents of an 8-year-old starting long-term omeprazole therapy for GERD. Which statements should the nurse include in the teaching? Select all that apply.",
    options: [
      "A. Long-term use can reduce calcium absorption and increase the risk of bone loss.",
      "B. The medication should be taken 30 minutes before the first meal for best effectiveness.",
      "C. The medication should be stopped immediately if symptoms of heartburn resolve.",
      "D. Long-term use can increase the risk of Clostridioides difficile infection.",
      "E. Antacids can be taken at any time alongside this medication for breakthrough symptoms."
    ],
    correct: ["A", "B", "D"],
    rationale: "(A) Long-term PPI use reduces gastric acid needed for calcium absorption, increasing bone loss risk — parents should ensure adequate calcium and weight-bearing activity. (B) Before the first meal is the correct administration time for maximum efficacy. (D) PPIs alter gastric pH, which can allow C. diff overgrowth; this is a known long-term risk to teach. Option C is WRONG — PPIs should not be stopped abruptly; rebound acid hypersecretion occurs and the medication should be tapered. Option E is WRONG — antacids should not be taken within 1–2 hours of PPIs (or most medications) as they alter absorption; they cannot be taken 'at any time.'",
    trap: "Option E is tempting because antacids seem harmless — the interaction with timing and absorption is what makes this wrong."
  },
  {
    id: "m9_21",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Sucralfate — administration rules",
    stem: "A nurse is preparing to administer sucralfate 1 g to an adolescent with a duodenal ulcer. The patient's medication administration record also shows ciprofloxacin due at the same time. What is the nurse's best action?",
    options: [
      "A. Administer both medications together to improve patient adherence.",
      "B. Give the sucralfate first, then administer the ciprofloxacin 30 minutes later.",
      "C. Give the ciprofloxacin first, then administer the sucralfate at least 2 hours later.",
      "D. Hold the sucralfate and administer only the ciprofloxacin, as they are incompatible."
    ],
    correct: ["C"],
    rationale: "Sucralfate creates a protective gel barrier in the stomach and significantly reduces the absorption of many drugs by binding to them. The recommendation is to give other medications at least 2 hours BEFORE sucralfate to ensure adequate absorption. Ciprofloxacin absorption is particularly impaired by sucralfate. Giving them together would reduce ciprofloxacin bioavailability and may result in subtherapeutic antibiotic levels. Giving sucralfate first and ciprofloxacin 30 minutes later is still too close together. The medications are not incompatible in the sense that one must be held — they simply must be separated by time.",
    trap: "Students may think 'give sucralfate first since it coats the stomach' — the opposite is correct; sucralfate last (or other drugs 2 hours before) is the rule."
  },
  {
    id: "m9_22",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Misoprostol — contraindication in pregnancy",
    stem: "A 17-year-old female with juvenile idiopathic arthritis requires long-term NSAID therapy. The rheumatologist prescribes misoprostol to prevent NSAID-induced ulcers. Before administering the medication, what is the most important assessment the nurse must perform?",
    options: [
      "A. Assess the patient's current pain level using a numeric scale.",
      "B. Determine whether the patient is or could be pregnant.",
      "C. Obtain a serum magnesium level before the first dose.",
      "D. Verify that the patient has not taken antacids in the past 2 hours."
    ],
    correct: ["B"],
    rationale: "Misoprostol is a prostaglandin E1 analog. Prostaglandins stimulate uterine contractions (uterotonic effect), and misoprostol is used in obstetrics to induce labor and cause medical abortions. It is absolutely contraindicated in pregnancy because it causes miscarriage. Before administering to a female of reproductive age, the nurse must assess for pregnancy. This is the highest-priority assessment. Pain level assessment is routine but not the priority safety check here. Magnesium is relevant to antacid use with misoprostol (magnesium antacids worsen diarrhea) but is not a required pre-dose lab. Antacid timing is a teaching point but not the most important assessment before the first dose.",
    trap: "Students may focus on the GI-related assessments (antacids, magnesium) and miss the pregnancy contraindication — which is the most dangerous oversight."
  },
  {
    id: "m9_23",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Ondansetron — class and mechanism",
    stem: "A 9-year-old receiving chemotherapy for leukemia is ordered ondansetron 0.15 mg/kg IV before each chemotherapy cycle. The parents ask how this medication prevents nausea. Which explanation by the nurse is accurate?",
    options: [
      "A. Ondansetron blocks dopamine receptors in the chemoreceptor trigger zone, preventing nausea signals from reaching the vomiting center.",
      "B. Ondansetron blocks serotonin (5-HT3) receptors in the GI tract and chemoreceptor trigger zone, preventing transmission of nausea impulses.",
      "C. Ondansetron coats the stomach lining to prevent irritation from chemotherapy agents.",
      "D. Ondansetron blocks histamine receptors in the inner ear, preventing motion-induced nausea."
    ],
    correct: ["B"],
    rationale: "Ondansetron is a 5-HT3 (serotonin) receptor antagonist. Chemotherapy causes enterochromaffin cells in the GI tract to release serotonin, which activates vagal afferents and the CTZ (chemoreceptor trigger zone in the medulla), triggering nausea and vomiting. Ondansetron blocks these serotonin receptors at both sites, preventing the signal cascade. It does NOT block dopamine receptors — that is metoclopramide's mechanism. It does not coat the stomach — that is sucralfate. It does not block histamine receptors — that is dimenhydrinate (for motion sickness).",
    trap: "Metoclopramide is a dopamine antagonist also used for chemotherapy nausea — students confuse the two; ondansetron is specifically a serotonin antagonist."
  },
  {
    id: "m9_24",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Ondansetron — serious adverse effects (QT prolongation)",
    stem: "A nurse is reviewing the chart of a 15-year-old prescribed ondansetron for post-operative nausea. Which finding in the patient's history would prompt the nurse to hold the medication and contact the provider?",
    options: [
      "A. History of seasonal allergies managed with loratadine",
      "B. History of congenital long QT syndrome",
      "C. Current prescription for omeprazole for GERD",
      "D. History of mild intermittent asthma managed with albuterol PRN"
    ],
    correct: ["B"],
    rationale: "Ondansetron causes QT interval prolongation, which increases the risk of torsades de pointes — a potentially fatal ventricular arrhythmia. It is contraindicated in patients with congenital long QT syndrome because baseline QT prolongation plus a drug that prolongs QT further creates unacceptable risk for fatal arrhythmia. Loratadine (non-sedating antihistamine) does not significantly interact with ondansetron. Omeprazole does not have a contraindication with ondansetron. Albuterol can cause tachycardia but does not interact meaningfully with ondansetron in a patient without pre-existing cardiac disease.",
    trap: "Students may flag the asthma history (albuterol → cardiac effects) — but long QT is the absolute contraindication, not asthma."
  },
  {
    id: "m9_25",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Ondansetron — ODT and PKU",
    stem: "A nurse is preparing to administer an ondansetron 4 mg oral dissolving tablet (ODT) to a child experiencing post-operative nausea. Before placing the tablet under the child's tongue, the nurse reviews the allergy and history section of the chart. Which finding requires the nurse to select an alternative formulation?",
    options: [
      "A. Allergy to penicillin",
      "B. History of phenylketonuria (PKU)",
      "C. History of lactose intolerance",
      "D. Allergy to shellfish"
    ],
    correct: ["B"],
    rationale: "Ondansetron ODT tablets contain aspartame as a sweetening agent. Aspartame is a source of phenylalanine, which cannot be metabolized by patients with phenylketonuria (PKU) due to the absence of phenylalanine hydroxylase. Administering an aspartame-containing product to a child with PKU can cause dangerous phenylalanine accumulation. The alternative is to use the regular tablet or IV formulation. Penicillin allergy and shellfish allergy are not relevant to this formulation issue. Lactose intolerance does not contraindicate aspartame-containing products.",
    trap: "Students who know the QT prolongation contraindication may overlook the PKU/ODT-specific issue — this is a formulation-specific, not drug-class, contraindication."
  },
  {
    id: "m9_26",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Metoclopramide — EPS prevention",
    stem: "A nurse is preparing to administer metoclopramide IV to a 13-year-old before chemotherapy. Which medication should the nurse administer before the metoclopramide to reduce the risk of extrapyramidal symptoms?",
    options: [
      "A. Ondansetron (Zofran)",
      "B. Diphenhydramine (Benadryl)",
      "C. Lorazepam (Ativan)",
      "D. Omeprazole (Prilosec)"
    ],
    correct: ["B"],
    rationale: "Metoclopramide is a dopamine (D2) receptor antagonist and can cause extrapyramidal symptoms (EPS) — including acute dystonia, lip smacking, facial spasms, and oculogyric crisis — by blocking dopamine receptors in the basal ganglia. Pretreatment with diphenhydramine (an antihistamine with anticholinergic properties) reduces the incidence of EPS by blocking the acetylcholine excess that results from dopamine blockade. This is standard practice when using metoclopramide for chemotherapy nausea. Ondansetron is a serotonin antagonist that can be used alongside metoclopramide but does not prevent EPS. Lorazepam is a benzodiazepine used for anxiety but does not prevent EPS from dopamine blockade. Omeprazole reduces acid but has no role in EPS prevention.",
    trap: "Students may think ondansetron prevents EPS because both drugs treat chemo nausea — but only diphenhydramine (anticholinergic) prevents the dopamine-blockade-related movement side effects."
  },
  {
    id: "m9_27",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Metoclopramide — contraindications",
    stem: "A nurse is reviewing orders for a 16-year-old admitted with severe nausea and vomiting. The provider orders metoclopramide. The nurse reviews the chart and identifies a contraindication. Which finding should prompt the nurse to contact the provider before administering the medication?",
    options: [
      "A. History of seasonal allergic rhinitis treated with loratadine",
      "B. History of Parkinson's disease managed with levodopa-carbidopa",
      "C. Serum potassium of 3.6 mEq/L",
      "D. Current prescription for omeprazole"
    ],
    correct: ["B"],
    rationale: "Metoclopramide is a D2 dopamine receptor antagonist. Parkinson's disease is caused by dopamine deficiency in the basal ganglia. Blocking dopamine receptors with metoclopramide will worsen Parkinson's motor symptoms and is contraindicated. Additionally, it opposes the therapeutic effect of levodopa-carbidopa, which works by increasing dopamine. Allergic rhinitis and loratadine use have no interaction with metoclopramide. A potassium of 3.6 mEq/L is within normal limits and does not contraindicate metoclopramide. Omeprazole has no clinically significant interaction with metoclopramide.",
    trap: "Students who know metoclopramide is for GI dysmotility may not think to check for Parkinson's — the dopamine mechanism connects the two."
  },
  {
    id: "m9_28",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Dimenhydrinate — anticholinergic effects and contraindications",
    stem: "An 11-year-old with a history of narrow-angle glaucoma is prescribed dimenhydrinate for motion sickness during a family road trip. What is the nurse's priority action?",
    options: [
      "A. Administer the medication as ordered; dimenhydrinate is safe for children over age 6.",
      "B. Notify the provider that dimenhydrinate is contraindicated in this patient due to the history of glaucoma.",
      "C. Halve the dose and monitor for sedation during the trip.",
      "D. Administer the medication with food to prevent GI upset."
    ],
    correct: ["B"],
    rationale: "Dimenhydrinate is an antihistamine with significant anticholinergic effects, including decreased aqueous humor drainage. In narrow-angle glaucoma, any anticholinergic medication is contraindicated because anticholinergic effects cause mydriasis (pupil dilation) that can further obstruct the trabecular meshwork and precipitate an acute angle-closure crisis — a medical emergency. The provider must be notified and an alternative anti-nausea medication considered. The medication should not be administered even at a reduced dose, as the mechanism of harm is the drug class, not the dose. Giving with food does not mitigate the glaucoma risk.",
    trap: "Students may think 'it's OTC, it's safe' — the glaucoma contraindication is a class effect of anticholinergics, not dose-related."
  },
  {
    id: "m9_29",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "PDA nursing care — premature infant",
    stem: "A 29-week premature infant is diagnosed with a hemodynamically significant patent ductus arteriosus. The neonatology team has ordered indomethacin. Which nursing actions are appropriate for this infant? Select all that apply.",
    options: [
      "A. Monitor urine output closely, as indomethacin can cause renal vasoconstriction.",
      "B. Assess for signs of necrotizing enterocolitis (NEC), which is a contraindication to continued indomethacin therapy.",
      "C. Administer prostaglandin E1 concurrently to maintain ductal patency during the transition.",
      "D. Auscultate for the characteristic machine-like murmur at the left infraclavicular area before each dose.",
      "E. Monitor for bleeding, as indomethacin inhibits platelet aggregation."
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "(A) Indomethacin reduces renal blood flow via prostaglandin inhibition; strict urine output monitoring is required. (B) NEC is a contraindication to indomethacin; the nurse monitors for abdominal distention, bloody stools, and feeding intolerance. (D) Auscultating for the murmur helps assess ductal patency and therapeutic response. (E) Indomethacin inhibits platelet aggregation (COX-1 inhibition), increasing bleeding risk — including IVH. Option C is WRONG: PGE1 opens the ductus; giving it concurrently with indomethacin (which closes the ductus) would completely oppose the therapy — this would never be ordered together in a PDA being treated for closure.",
    trap: "PGE1 is used for COA to keep the ductus open — using it with indomethacin for PDA closure would be the opposite of therapeutic."
  },
  {
    id: "m9_30",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "COA — nursing assessment",
    stem: "A nurse is assessing a 3-week-old infant with suspected coarctation of the aorta. Which findings would the nurse expect in this infant? Select all that apply.",
    options: [
      "A. Blood pressure in the arms measuring higher than blood pressure in the legs",
      "B. Weak or absent femoral pulses",
      "C. Machine-like continuous murmur at the left infraclavicular area",
      "D. Murmur heard loudest at the left interscapular area on the back",
      "E. Bounding upper extremity pulses with cool lower extremities"
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "(A) Upper extremity BP exceeding lower extremity BP is the defining hemodynamic finding of COA — the obstruction blocks aortic flow to the lower body. (B) Absent or weak femoral pulses reflect reduced blood flow below the obstruction. (D) The COA murmur is heard at the left interscapular area (back) — a distinguishing feature from other CHDs. (E) Bounding upper extremity pulses (from compensatory flow proximal to obstruction) with cool lower extremities (poor distal perfusion) are expected. Option C is WRONG: the machine-like continuous murmur is specific to PDA, not COA. COA has a systolic murmur on the back, not a continuous murmur at the left infraclavicular area.",
    trap: "The machine-like murmur is a PDA characteristic — inserting it here tests whether students can discriminate the two murmur patterns under time pressure."
  },
  {
    id: "m9_chain1_q1",
    type: "CHAIN",
    chain_id: "m9_chain1",
    chain_scenario: "A 5-month-old infant with known Tetralogy of Fallot is brought to the emergency department by parents who report the baby turned blue and 'went limp' during morning feeding. On arrival, the infant is deeply cyanotic, SpO2 reads 62% on room air, is agitated and crying vigorously, and appears to be breathing very rapidly and deeply.",
    concept: "TOF — TET spell recognition",
    stem: "The nurse recognizes this presentation as a hypercyanotic (TET) spell. What is the physiologic trigger for this episode occurring during morning feeding?",
    options: [
      "A. Feeding increases venous return to the right heart, raising RV pressure and worsening R→L shunting.",
      "B. Crying and feeding increase O2 demand and cause tachycardia, which together decrease filling time and pulmonary blood flow, worsening R→L shunting.",
      "C. Feeding stimulates the vagal response, causing bradycardia that reduces cardiac output and systemic oxygenation.",
      "D. The prone feeding position compresses the pulmonary vasculature, reducing pulmonary blood flow."
    ],
    correct: ["B"],
    rationale: "TET spells are triggered by any event that increases O2 demand or decreases pulmonary blood flow — crying, feeding, and morning waking are classic triggers. Crying and vigorous feeding increase metabolic demand and cause agitation-driven tachycardia; the resulting decrease in diastolic filling time reduces stroke volume, and the increased O2 demand cannot be met. Simultaneously, agitation increases sympathetic tone, causing infundibular (subpulmonary) spasm that worsens RV outflow obstruction, increasing R→L shunting. Option A incorrectly implies increased venous return as the trigger — venous return alone does not explain the acute spasm mechanism. Option C is incorrect — vagal bradycardia slows the heart but TET spells are associated with tachycardia and hyperpnea, not bradycardia. Option D is not a recognized mechanism.",
    trap: "Students may focus only on the O2 demand side and miss the infundibular spasm component — both mechanisms contribute to TET spells."
  },
  {
    id: "m9_chain1_q2",
    type: "CHAIN",
    chain_id: "m9_chain1",
    chain_scenario: "A 5-month-old infant with known Tetralogy of Fallot is brought to the emergency department by parents who report the baby turned blue and 'went limp' during morning feeding. On arrival, the infant is deeply cyanotic, SpO2 reads 62% on room air, is agitated and crying vigorously, and appears to be breathing very rapidly and deeply.",
    concept: "TOF — TET spell management sequence",
    stem: "The team responds to the TET spell. The nurse prepares interventions. In which order should the nurse prioritize the following actions? Place the interventions in the correct sequence: (1) Apply high-flow oxygen, (2) Place infant in knee-chest position, (3) Administer IV morphine, (4) Give IV fluids 5–10 mL/kg.",
    options: [
      "A. 1 → 2 → 3 → 4",
      "B. 2 → 1 → 3 → 4",
      "C. 3 → 2 → 1 → 4",
      "D. 2 → 3 → 1 → 4"
    ],
    correct: ["B"],
    rationale: "The correct TET spell sequence is KOMP: (2) Knee-chest FIRST to increase SVR and reduce R→L shunting — this is the most immediately effective mechanical intervention. (1) O2 second to maximize oxygen delivery to blood reaching the lungs. (3) Morphine third to reduce hyperpnea and anxiety, lowering O2 demand and decreasing infundibular spasm. (4) Small IV fluid bolus (5–10 mL/kg) last to increase preload and promote pulmonary flow. Option A places O2 before position — O2 alone cannot reverse an R→L shunt; position changes the pressure gradient first. Option C starts with morphine — without first reducing the shunt, drug delivery has limited physiologic benefit. Option D inverts morphine and O2 — O2 before morphine is correct per the KOMP mnemonic.",
    trap: "O2 is the reflexive first action for any cyanotic patient — but for TET spells, position changes the hemodynamics before O2 can help."
  },
  {
    id: "m9_chain1_q3",
    type: "CHAIN",
    chain_id: "m9_chain1",
    chain_scenario: "A 5-month-old infant with known Tetralogy of Fallot is brought to the emergency department by parents who report the baby turned blue and 'went limp' during morning feeding. On arrival, the infant is deeply cyanotic, SpO2 reads 62% on room air, is agitated and crying vigorously, and appears to be breathing very rapidly and deeply.",
    concept: "TOF — evaluating response to TET spell treatment",
    stem: "After placing the infant in knee-chest position, applying O2, and administering IV morphine, the nurse reassesses. SpO2 has improved to 83% and the infant is less agitated but still cyanotic at rest. The cardiologist states the infant will need surgical repair and asks the nurse to prepare for IV propranolol. What is the rationale for adding propranolol at this stage?",
    options: [
      "A. Propranolol increases heart rate and cardiac output, forcing more blood into the pulmonary vasculature.",
      "B. Propranolol is a beta blocker that reduces infundibular (subpulmonary) muscular spasm, reducing dynamic RV outflow obstruction and improving pulmonary blood flow.",
      "C. Propranolol decreases systemic vascular resistance, shifting blood flow from the systemic to the pulmonary circulation.",
      "D. Propranolol directly vasodilates the pulmonary arteries, reducing pulmonary vascular resistance and improving oxygenation."
    ],
    correct: ["B"],
    rationale: "The infundibulum (subpulmonary outflow tract) contains smooth muscle that can go into spasm during a TET spell, dynamically worsening the pulmonary stenosis. Propranolol, a non-selective beta blocker, inhibits sympathetic stimulation of this muscle, reducing infundibular spasm and thereby reducing dynamic RV outflow obstruction. This allows more blood to flow through the pulmonary vasculature and be oxygenated. Propranolol does NOT increase heart rate — it slows it. Propranolol does NOT decrease SVR — beta blockade at peripheral vessels has minimal SVR effect and nitroglycerin-class drugs do that. Propranolol does not directly vasodilate pulmonary arteries — that is sildenafil's mechanism.",
    trap: "Students may think beta blockers are contraindicated in cardiac emergencies (remembering not to use them in cardiogenic shock) — in TOF, reducing infundibular spasm is exactly why they are used."
  }
];
const M10_QUESTIONS = [
  {
    id: "m10_1",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF — impaired myocardial function signs",
    stem: "A 3-month-old infant with an unrepaired large VSD is admitted for evaluation of heart failure. The nurse assesses the infant during a feeding attempt. Which finding most directly reflects impaired myocardial function rather than pulmonary or systemic venous congestion?",
    options: [
      "A. Respiratory rate of 72 breaths/min with subcostal retractions",
      "B. Diaphoresis across the forehead and neck during feeding with cool, mottled extremities",
      "C. Liver edge palpable 3 cm below the right costal margin",
      "D. Periorbital edema noted on morning assessment"
    ],
    correct: ["B"],
    rationale: "Diaphoresis with feeding and cool mottled extremities are signs of impaired myocardial function — the failing heart activates the sympathetic nervous system, causing peripheral vasoconstriction (cool extremities) and diaphoresis as the body attempts to maintain cardiac output during the increased demand of feeding. Tachypnea with retractions (A) is pulmonary venous congestion — a left-sided HF sign from fluid backing up into pulmonary circulation. Hepatomegaly (C) is systemic venous congestion — a right-sided HF sign from blood backing up in the systemic veins. Periorbital edema (D) is also systemic venous congestion.",
    trap: "Retractions and fast breathing are vivid clinical findings that grab attention — but they indicate pulmonary congestion, not impaired myocardial function."
  },
  {
    id: "m10_2",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF — systemic venous congestion, hepatomegaly",
    stem: "A 4-month-old with a large atrial septal defect is being assessed for signs of heart failure progression. The nurse notes that the liver edge is palpable 4 cm below the right costal margin and the infant has gained 180 grams over the past 3 days. Which category of heart failure do these findings represent, and what is the mechanism?",
    options: [
      "A. Pulmonary venous congestion; left-sided failure causes fluid to back up into the lungs, increasing weight",
      "B. Impaired myocardial function; decreased cardiac output causes fluid retention and organ enlargement as compensatory mechanisms",
      "C. Systemic venous congestion; right-sided failure causes blood to back up in the systemic veins, with the liver serving as the largest venous reservoir",
      "D. Pulmonary overcirculation; left-to-right shunting overloads the pulmonary bed, causing hepatic congestion"
    ],
    correct: ["C"],
    rationale: "Hepatomegaly and rapid weight gain (from fluid retention) are signs of systemic venous congestion — the right-sided HF category. When the right ventricle fails, blood backs up in the systemic venous circulation. The liver is the largest venous reservoir in the body and enlarges first. Weight gain from fluid retention is detected by daily weights. Pulmonary venous congestion (A) would manifest as tachypnea and retractions, not hepatomegaly. Impaired myocardial function (B) causes diaphoresis with feeding, cool extremities, and decreased urine output — not primarily hepatomegaly. Pulmonary overcirculation is the mechanism of the underlying defect but does not directly explain right-sided venous congestion.",
    trap: "Students may choose B thinking hepatomegaly is a general compensation — it specifically indicates venous blood backing up into the systemic circulation (R-sided failure)."
  },
  {
    id: "m10_3",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF — pulmonary venous congestion signs",
    stem: "A nurse is assessing a 6-week-old with a large VSD and heart failure during morning rounds. The infant has a respiratory rate of 78 breaths/min, intercostal and subcostal retractions, and cannot lie flat without increased respiratory distress. The nurse documents these findings under which category of heart failure signs?",
    options: [
      "A. Systemic venous congestion",
      "B. Impaired myocardial function",
      "C. Pulmonary venous congestion",
      "D. Right ventricular outflow obstruction"
    ],
    correct: ["C"],
    rationale: "Tachypnea, retractions, and orthopnea (inability to lie flat without respiratory distress) are signs of pulmonary venous congestion — the left-sided HF category. Left ventricular failure causes blood to back up into the pulmonary veins, increasing pulmonary capillary hydrostatic pressure, causing fluid to leak into the lung interstitium and alveoli. This causes tachypnea, retractions, cyanosis, and orthopnea. Systemic venous congestion manifests as hepatomegaly, peripheral edema, weight gain. Impaired myocardial function manifests as diaphoresis with feeding, pallor, cool extremities, decreased UO. Right ventricular outflow obstruction is a structural finding in TOF, not a HF category.",
    trap: "Orthopnea is a classic adult left-sided HF sign that students may not recognize in infants — it manifests as worsening distress when supine."
  },
  {
    id: "m10_4",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Digoxin — hold parameters by age",
    stem: "A nurse is preparing to administer digoxin 0.025 mg PO to a 7-month-old infant with heart failure secondary to a large VSD. Before giving the medication, the nurse counts the apical pulse for one full minute and obtains a rate of 86 bpm. What is the nurse's correct action?",
    options: [
      "A. Administer the digoxin — 86 bpm is within normal range for a 7-month-old.",
      "B. Hold the digoxin and notify the provider — the apical pulse is below the hold threshold for infants.",
      "C. Administer the digoxin but document the borderline heart rate and monitor closely.",
      "D. Recount the apical pulse in 15 minutes; a single reading below threshold does not require holding the dose."
    ],
    correct: ["B"],
    rationale: "For infants under 1 year of age, digoxin should be held if the apical heart rate is below 90–110 bpm (using 90 as the conservative clinical threshold). An apical rate of 86 bpm falls below this threshold. The nurse must hold the dose and notify the provider. Administering despite the low rate risks bradycardia from additional SA/AV node suppression. Documenting and monitoring does not replace holding the medication when the hold parameter has been met. A single confirmatory recount is acceptable clinical practice, but waiting 15 minutes to recount delays the hold decision inappropriately when the rate is clearly below threshold.",
    trap: "86 bpm seems 'normal' for an older child or adult — the infant-specific hold threshold (90–110 bpm) is higher than adult thresholds and is the discriminating fact here."
  },
  {
    id: "m10_5",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Digoxin — hold parameters, child vs infant",
    stem: "A nurse is caring for two patients on the pediatric cardiology unit. Patient A is an 8-month-old with a repaired VSD receiving digoxin. Patient B is a 4-year-old with a repaired TOF receiving digoxin. When reviewing vital signs before morning medications, Patient A has an apical rate of 92 bpm and Patient B has an apical rate of 66 bpm. Which action is correct?",
    options: [
      "A. Administer digoxin to both patients — both rates are above 60 bpm.",
      "B. Hold digoxin for Patient A (rate 92 is below the infant threshold of 90–110) and administer to Patient B.",
      "C. Administer digoxin to Patient A and hold for Patient B (rate 66 is below the child threshold of 70 bpm).",
      "D. Hold digoxin for both patients and notify the provider for updated hold parameters."
    ],
    correct: ["C"],
    rationale: "Digoxin hold parameters differ by age: infant (<1 year) hold if apical HR <90–110 bpm; child (>1 year) hold if apical HR <70 bpm. Patient A is 8 months old with HR 92 — this meets or exceeds the infant threshold (using 90 as threshold) and can be administered. Patient B is 4 years old with HR 66 — this is below the child threshold of 70 bpm and must be held with provider notification. Using adult or uniform thresholds (like 60 bpm for all) is dangerous in pediatric practice. Option B incorrectly identifies 92 bpm as below threshold for an infant — 90 is the lower boundary.",
    trap: "The adult default hold for digoxin is 60 bpm — applying that adult rule to children misses the age-specific thresholds and leads to giving digoxin when it should be held."
  },
  {
    id: "m10_6",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Digoxin — HIGH ALERT, second RN verification",
    stem: "A nurse is preparing to administer digoxin elixir 50 mcg (0.05 mg) to a 4-month-old infant. The nurse draws up the dose and notes the syringe contains 1.2 mL of digoxin elixir. What is the nurse's most important next action before administering the medication?",
    options: [
      "A. Administer the medication — 1.2 mL is a small volume appropriate for an infant.",
      "B. Stop, verify the order and perform a second nurse double-check before proceeding, as infants should never receive more than 1 mL (50 mcg) per dose.",
      "C. Dilute the syringe to 2 mL with normal saline to make the dose easier to administer.",
      "D. Contact the pharmacy to confirm the concentration of the digoxin elixir before proceeding."
    ],
    correct: ["B"],
    rationale: "Digoxin is a HIGH ALERT medication requiring second RN verification before every dose. The maximum infant dose is 1 mL (50 mcg). Drawing up 1.2 mL means either the dose is too high, or there is a calculation error or concentration error. The nurse must STOP, verify the order and dose calculation, and have a second nurse independently verify before administering. Administering 1.2 mL without verification risks overdose in a neonate — the therapeutic-to-toxic window for digoxin is very narrow. Diluting the dose does not address the fact that the volume exceeds the infant maximum — it could result in a miscalculated dose. Contacting pharmacy is secondary to the immediate second-nurse verification requirement.",
    trap: "1.2 mL seems like a trivial difference from 1 mL — in digoxin dosing for infants, any volume exceeding 1 mL is a stop-and-recheck signal, not a minor deviation."
  },
  {
    id: "m10_7",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Digoxin toxicity — GBV triad recognition",
    stem: "A nurse enters the room of a 10-month-old with congenital heart disease who has been receiving digoxin. The mother reports the infant has not eaten well all morning and vomited twice. The nurse counts the apical pulse and obtains a rate of 82 bpm. The infant is pale and lethargic. Which conclusion should the nurse draw from these findings?",
    options: [
      "A. These findings are consistent with a viral gastroenteritis; encourage clear liquids and monitor.",
      "B. The vomiting may indicate the infant needs a larger digoxin dose to control heart failure symptoms.",
      "C. These findings are consistent with digoxin toxicity; hold the medication and notify the provider.",
      "D. The low-normal heart rate and poor feeding indicate the infant needs an increase in furosemide dosing."
    ],
    correct: ["C"],
    rationale: "Digoxin toxicity in infants presents with GI symptoms first — poor feeding, vomiting, and anorexia. The GBV triad is: GI symptoms → Bradycardia → Visual changes. The infant has HR of 82 bpm, which is below the infant hold threshold (90 bpm), combined with vomiting and poor feeding — this is digoxin toxicity until proven otherwise. The nurse must hold the medication, check the serum digoxin level and electrolytes, and notify the provider immediately. Viral gastroenteritis is a distractor — these symptoms in a child on digoxin must prompt toxicity evaluation first. Increasing the digoxin dose would worsen toxicity. Furosemide adjustment does not address the toxicity presentation.",
    trap: "Vomiting and poor feeding are common infant complaints — the key is recognizing that in a patient ON digoxin, these are the classic toxicity GI signs and must not be attributed to routine illness without ruling out toxicity."
  },
  {
    id: "m10_8",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Digoxin toxicity — hypokalemia relationship",
    stem: "A 14-month-old with heart failure is receiving digoxin and furosemide. Morning labs show potassium of 3.0 mEq/L (normal 3.5–5.0). The nurse knows this electrolyte imbalance is especially dangerous for this patient for which reason?",
    options: [
      "A. Hypokalemia causes vasoconstriction, increasing afterload and worsening heart failure.",
      "B. Hypokalemia and digoxin compete for the same receptor (Na+/K+ ATPase), and low potassium allows more digoxin binding, increasing toxicity risk at therapeutic drug levels.",
      "C. Hypokalemia reduces myocardial contractility, requiring a higher digoxin dose to maintain therapeutic effect.",
      "D. Furosemide causes potassium loss, which triggers metabolic alkalosis that inactivates digoxin."
    ],
    correct: ["B"],
    rationale: "Digoxin works by inhibiting Na+/K+ ATPase pumps on myocardial cells. Potassium and digoxin compete for binding sites on this pump. When serum potassium is low, there is less competition, and digoxin binds more avidly — producing a toxic effect even at a serum digoxin level that would otherwise be therapeutic. Furosemide is a loop diuretic that causes potassium loss, creating exactly this dangerous combination. The nurse must monitor potassium, supplement as ordered, and hold digoxin if toxicity signs appear. Hypokalemia does not cause vasoconstriction in a clinically meaningful way relevant here. Hypokalemia does not reduce contractility requiring higher digoxin — the concern is increased sensitivity, not resistance.",
    trap: "Students may think low potassium just means 'give potassium' and miss the mechanism — the digoxin-potassium competition is the reason this combination is dangerous."
  },
  {
    id: "m10_9",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Digoxin toxicity — management with Digibind",
    stem: "A 9-month-old is admitted with confirmed severe digoxin toxicity. The serum digoxin level is 4.8 ng/mL (therapeutic range 0.8–2.0 ng/mL). The infant has a heart rate of 55 bpm, is lethargic, and has bigeminy on the cardiac monitor. The provider orders digoxin-specific antibody fragments (Digibind). The nurse explains to the student nurse that Digibind works by which mechanism?",
    options: [
      "A. Digibind blocks Na+/K+ ATPase pumps, reversing the effect of digoxin on the heart.",
      "B. Digibind binds free digoxin molecules in the bloodstream, removing them from circulation and preventing further receptor binding.",
      "C. Digibind induces diuresis, increasing renal excretion of digoxin.",
      "D. Digibind stimulates the SA node to increase heart rate, counteracting digoxin-induced bradycardia."
    ],
    correct: ["B"],
    rationale: "Digibind (digoxin immune Fab) consists of antibody fragments that have a very high affinity for digoxin. They bind free digoxin molecules in the bloodstream, forming a complex that cannot bind to Na+/K+ ATPase — the drug is effectively sequestered and eliminated renally. This rapidly reverses toxicity. Digibind does not block Na+/K+ ATPase itself. It does not cause diuresis — renal clearance of the digoxin-Fab complex occurs naturally. It does not directly stimulate the SA node — heart rate normalizes as the digoxin is removed from circulation.",
    trap: "Students may confuse Digibind's mechanism with naloxone (opioid reversal) — Digibind works by sequestering the drug molecule, not by blocking the receptor."
  },
  {
    id: "m10_10",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF nutrition — caloric requirements",
    stem: "A dietitian is reviewing nutrition orders with the nurse for a 2-month-old with heart failure and failure to thrive. The infant weighs 4.2 kg. The standard formula provides 20 kcal/oz. The dietitian recommends concentrating formula to 27 kcal/oz. The nurse's understanding of why caloric density must be increased is best explained by which statement?",
    options: [
      "A. Cardiac infants absorb fewer calories per ounce due to intestinal hypoperfusion, requiring standard formula supplemented with iron.",
      "B. Cardiac infants require approximately 150 kcal/kg/day compared to the normal infant requirement of ~100 kcal/kg/day, due to the increased metabolic work of breathing and cardiac effort.",
      "C. Concentrated formula reduces fluid volume intake, preventing fluid overload in an infant at risk for pulmonary edema.",
      "D. Heart failure reduces gastric motility, so concentrating formula ensures adequate calories are absorbed in a smaller volume before the infant tires."
    ],
    correct: ["B"],
    rationale: "Infants with heart failure require approximately 150 kcal/kg/day — 50% more than the normal infant requirement (~100 kcal/kg/day) — because the increased work of breathing and cardiac effort significantly elevates metabolic demand. These infants cannot increase volume intake (they tire easily), so caloric density must be increased. Standard 20 kcal/oz formula is insufficient. Concentrating to 24–30 kcal/oz (using MCT oil or glucose polymers) delivers adequate calories in a smaller volume. Option A incorrectly identifies intestinal hypoperfusion and iron supplementation as the rationale — the primary reason is increased metabolic demand. Option C is partially true (fluid management benefit) but not the primary clinical reason. Option D describes gastric motility reduction — this is not the primary mechanism.",
    trap: "150 kcal/kg/day is the exam number — students who default to 100 kcal/kg/day (normal infant) will fail to recognize why concentrated formula is necessary."
  },
  {
    id: "m10_11",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF nutrition — NG tube threshold",
    stem: "A nurse is feeding a 3-month-old with heart failure. The infant has been feeding for 32 minutes and has taken only 35 mL of a 90 mL prescribed feeding. The infant's respiratory rate is 88 breaths/min and the baby is diaphoretic and appears fatigued. What is the most appropriate nursing action?",
    options: [
      "A. Continue the oral feeding, increasing the flow rate of the bottle to shorten the feeding time.",
      "B. Stop the feeding, allow the infant to rest, and attempt again in 1 hour.",
      "C. Place a nasogastric tube and administer the remaining feeding via NG, as this feeding has exceeded 30 minutes.",
      "D. Notify the provider that the infant is refusing to eat and request an appetite stimulant."
    ],
    correct: ["C"],
    rationale: "Feedings lasting longer than 30 minutes exhaust cardiac infants — the work of sucking in the context of respiratory distress and increased metabolic demand exceeds the infant's energy reserves. When feeding exceeds 30 minutes, the clinical guideline is to insert an NG tube and complete the feeding enterally. This preserves caloric intake without causing further cardiovascular stress. Additionally, RR >80–100/min during feeding is an independent indication for NG tube use, as rapid breathing makes coordinated suck-swallow-breathe unsafe. Increasing bottle flow rate worsens the problem — faster flow increases aspiration risk and feeding demand. Waiting and retrying later means the infant receives inadequate calories. This is not refusal — the infant is physiologically exhausted.",
    trap: "NG tube insertion feels like an escalation — but in cardiac infants, it is the therapeutic standard of care at 30 minutes, not a last resort."
  },
  {
    id: "m10_12",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF nursing — cluster care rationale",
    stem: "During morning care planning, the nurse schedules all assessments, medication administration, diapering, and position changes to occur together for a 5-month-old with congestive heart failure. When the nurse explains this plan to a nursing student, which rationale is most accurate?",
    options: [
      "A. Clustering care reduces nursing overtime by grouping tasks efficiently.",
      "B. Clustering care is a nursing intervention that reduces cardiac oxygen demand by allowing maximum uninterrupted rest between care activities.",
      "C. Clustering care prevents infection by reducing the number of times the nurse enters the room.",
      "D. Clustering care is required by hospital policy for all infants under 6 months of age."
    ],
    correct: ["B"],
    rationale: "Cluster care is a deliberate therapeutic nursing intervention for infants with heart failure. Each care activity — assessment, repositioning, diapering, medication — increases the infant's arousal, oxygen consumption, and cardiac work. By grouping all activities together, the nurse creates longer rest windows during which the infant's heart can recover, minimizing cumulative oxygen demand. This is not primarily about nursing efficiency, infection control, or policy — it is about reducing myocardial work. The rationale ties directly to the pathophysiology: a failing heart in a small infant has minimal reserve, and each interruption depletes that reserve.",
    trap: "Students may think cluster care is a comfort or efficiency measure — it is a cardiac workload reduction intervention with a direct physiologic rationale."
  },
  {
    id: "m10_13",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF nursing — positioning",
    stem: "A 4-month-old admitted with heart failure and pulmonary venous congestion is showing increased work of breathing with a respiratory rate of 76 breaths/min and subcostal retractions. Which positioning intervention will the nurse implement?",
    options: [
      "A. Supine flat position to maximize venous return to the heart",
      "B. Prone position to improve tidal volume by allowing chest expansion",
      "C. Semi-Fowler or high Fowler position with head of bed elevated 30–45 degrees",
      "D. Right lateral decubitus position to promote right lung drainage"
    ],
    correct: ["C"],
    rationale: "Semi-Fowler or high Fowler position (HOB 30–45°) is the standard positioning intervention for a child with pulmonary venous congestion causing respiratory distress. Elevating the head of bed shifts fluid away from the lung bases through gravity, reduces the pressure of abdominal contents on the diaphragm, and allows optimal diaphragmatic descent — all reducing work of breathing. Infants can be placed in an infant seat to achieve this position. Supine flat position worsens pulmonary congestion by redistributing fluid to the lung bases and reducing FRC. Prone positioning is used in ARDS in adults — it is not a standard intervention for infant CHF. Right lateral decubitus does not specifically address pulmonary venous congestion.",
    trap: "Supine flat may seem neutral — in a child with pulmonary venous congestion, it actively worsens respiratory distress by redistributing fluid to dependent lung zones."
  },
  {
    id: "m10_14",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF monitoring — daily weight",
    stem: "A nurse is developing a care plan for a 6-month-old with heart failure. The nurse includes daily weight measurement as a priority intervention. When explaining this to parents, which statement best justifies why daily weight is a priority over other fluid monitoring approaches?",
    options: [
      "A. Daily weight detects subtle changes in sodium balance before electrolyte panels can reflect them.",
      "B. Daily weight is the most sensitive indicator of fluid retention because even small amounts of excess fluid produce measurable weight change before clinical edema becomes visible.",
      "C. Daily weight monitoring replaces the need for strict intake and output measurement in infants.",
      "D. Daily weight is required only during the acute phase and can be discontinued once the infant is stabilized on medications."
    ],
    correct: ["B"],
    rationale: "Daily weight is the most reliable bedside indicator of fluid retention in infants and children with heart failure. Because 1 liter of fluid equals 1 kg, even modest fluid accumulation produces measurable weight change before it manifests as visible peripheral edema or periorbital puffiness. Weight gain >50 g/day in an infant or >1 kg/day in a child should be reported to the provider as a sign of fluid overloading. Daily weight does not primarily detect sodium balance changes — that requires serum labs. Daily weight is used in conjunction with strict I&O, not instead of it. Daily weighing is a chronic management tool that should continue after discharge, not stop at stabilization.",
    trap: "Students may choose the electrolyte rationale (A) because they know sodium and fluid are linked — but the clinical point is weight is the most sensitive early-detection tool for fluid retention."
  },
  {
    id: "m10_15",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF monitoring — reporting threshold",
    stem: "A nurse is reviewing morning assessments for a 4-month-old with heart failure. Yesterday's weight was 5.80 kg. Today's weight is 5.92 kg. The infant had no changes in feeding volume and is not on diuretics currently. What is the nurse's priority action?",
    options: [
      "A. Document the weight and continue routine monitoring — a 120 g increase over one day is within normal variation.",
      "B. Notify the provider, as a weight gain of 120 g in one day exceeds the 50 g/day threshold and may indicate fluid retention.",
      "C. Increase the infant's oral feeding volume to compensate for the increased metabolic demand.",
      "D. Restrict all oral fluids for 4 hours and reweigh the infant."
    ],
    correct: ["B"],
    rationale: "The reporting threshold for infants with heart failure is weight gain >50 g/day. A gain of 120 g in one day is well above this threshold and in the absence of a feeding volume increase, most likely represents fluid retention — a sign of worsening heart failure or inadequate diuresis. The provider must be notified so medication adjustments (furosemide dose) or other interventions can be made. Documenting and continuing is insufficient when a reporting threshold has been crossed. Increasing feeding volume would worsen fluid overload. Restricting fluids and reweighing delays appropriate intervention and may worsen the infant's nutritional status.",
    trap: "120 g seems small to a student thinking in adult terms — the pediatric threshold of 50 g/day is the clinical anchor; exceeding it requires notification."
  },
  {
    id: "m10_16",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Furosemide — monitoring with digoxin",
    stem: "A 10-month-old with heart failure is receiving digoxin 0.025 mg PO daily and furosemide 1 mg/kg PO twice daily. Morning labs show potassium 3.1 mEq/L. The nurse is preparing to administer both medications. What is the nurse's most appropriate action?",
    options: [
      "A. Administer both medications as ordered — the potassium is only mildly low and can be corrected with dietary changes.",
      "B. Hold both medications and place the infant NPO until potassium normalizes.",
      "C. Hold the digoxin (hold parameter not met), administer the furosemide, and notify the provider of the potassium level for replacement orders.",
      "D. Hold the furosemide, administer the digoxin, and notify the provider of the low potassium — additional furosemide will worsen the hypokalemia."
    ],
    correct: ["D"],
    rationale: "With a potassium of 3.1 mEq/L (hypokalemia), the clinical priority is to prevent worsening of a state that dramatically increases digoxin toxicity risk. Furosemide is a loop diuretic that causes potassium wasting — giving another dose will further reduce potassium and increase the risk of digoxin toxicity. The nurse should hold the furosemide, notify the provider for potassium replacement orders and guidance, and check whether digoxin should still be administered given the low potassium. The apical rate must be counted before digoxin administration — if above threshold, it can be given, but the provider still needs to know about the electrolyte imbalance. Option C is wrong because it continues the drug causing potassium loss. Option A underestimates the risk — 3.1 mEq/L is significantly hypokalemic.",
    trap: "The reflex to hold the digoxin (the HIGH ALERT drug) and give the diuretic misses the pathophysiology — furosemide is what's driving the dangerous electrolyte state here."
  },
  {
    id: "m10_17",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "ACE inhibitor — afterload reduction",
    stem: "A cardiologist adds enalapril to the regimen of a 5-month-old with heart failure from a large VSD. The parents ask what this medication does. Which explanation by the nurse is most accurate?",
    options: [
      "A. Enalapril increases the strength of the heart's contractions, helping the weakened heart pump more blood.",
      "B. Enalapril slows the heart rate, allowing more time for the ventricles to fill and improving stroke volume.",
      "C. Enalapril reduces afterload by blocking the conversion of angiotensin I to angiotensin II, decreasing systemic vascular resistance and making it easier for the heart to eject blood.",
      "D. Enalapril acts as a diuretic, removing excess fluid that is straining the heart."
    ],
    correct: ["C"],
    rationale: "Enalapril is an ACE inhibitor (angiotensin-converting enzyme inhibitor). It blocks the conversion of angiotensin I to angiotensin II, reducing angiotensin II-mediated vasoconstriction and aldosterone release. The result is decreased systemic vascular resistance (afterload reduction) and decreased sodium/water retention. This makes it easier for the failing ventricle to eject blood into a lower-resistance system. Increasing contractility (A) is digoxin's mechanism. Slowing heart rate (B) is a beta blocker or digoxin mechanism. Diuresis (D) is furosemide's mechanism — ACE inhibitors do cause mild natriuresis via aldosterone suppression, but this is secondary and not the primary benefit in HF.",
    trap: "ACE inhibitors and digoxin are both used in HF — students may attribute the contractility improvement to enalapril; enalapril's role is afterload reduction, not inotropy."
  },
  {
    id: "m10_18",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "HF nursing interventions — correct actions",
    stem: "A nurse is planning care for a 3-month-old with heart failure admitted for stabilization. Which nursing interventions are appropriate? Select all that apply.",
    options: [
      "A. Cluster all care activities to allow maximum uninterrupted rest periods.",
      "B. Elevate the head of the bed to 30–45 degrees to reduce work of breathing.",
      "C. Encourage oral ad libitum feeding to maximize caloric intake, even if feedings take 45 minutes.",
      "D. Monitor and report daily weight gain exceeding 50 grams per day.",
      "E. Manage fevers aggressively with antipyretics, as fever increases metabolic rate and O2 demand."
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "(A) Cluster care is a therapeutic intervention reducing cardiac O2 demand. (B) HOB elevation reduces pulmonary venous congestion and work of breathing. (D) Weight gain >50 g/day in an infant signals fluid retention and must be reported. (E) Fever increases metabolic rate and O2 consumption — aggressive fever management reduces cardiac workload. Option C is WRONG: feeding should not continue beyond 30 minutes regardless of volume taken. Feedings lasting >30 minutes exhaust the cardiac infant, and an NG tube should be placed rather than allowing prolonged oral feeding.",
    trap: "Encouraging oral feeding sounds supportive of the infant — but allowing a 45-minute feeding is harmful; NG tube at 30 minutes is the correct threshold."
  },
  {
    id: "m10_19",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Digoxin toxicity — signs",
    stem: "A nurse is assessing a 14-month-old who has been on digoxin for 3 months. The parents report the child has been 'fussy and not eating well' for two days. The nurse suspects possible digoxin toxicity. Which findings would support this concern? Select all that apply.",
    options: [
      "A. Heart rate of 60 bpm on apical assessment",
      "B. The child vomited twice during the night",
      "C. Temperature of 38.9°C (102°F) with rhinorrhea",
      "D. The child has been showing decreased interest in toys and prolonged sleepiness",
      "E. Parents report the child said 'everything looks yellow' when looking at lights"
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "(A) HR of 60 bpm is below the child >1 year threshold of 70 bpm — bradycardia is the B in GBV toxicity triad. (B) Vomiting is the GI manifestation (G in GBV) — the first sign of toxicity in children. (D) Lethargy and decreased interest (CNS signs) accompany digoxin toxicity. (E) Visual changes including yellow-green color distortion and halos around lights is the V in GBV. Option C (fever with rhinorrhea) suggests a viral illness — it is a plausible alternative explanation for fussiness and poor eating that must be ruled out, but fever and rhinorrhea are NOT signs of digoxin toxicity; this is a true-in-general distractor (viral URI is common) but wrong for this question about toxicity signs.",
    trap: "Fever and poor eating go together in viral illness — the trap is attributing all the symptoms to a URI instead of recognizing that in a digoxin patient, these warrant toxicity evaluation."
  },
  {
    id: "m10_20",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "O2 — caution in cyanotic lesions",
    stem: "A 3-month-old with hypoplastic left heart syndrome (HLHS) has a baseline SpO2 of 74% on room air. The nurse's aide reports the low sat to the charge nurse and suggests starting high-flow oxygen. What is the charge nurse's best response?",
    options: [
      "A. Agree and apply a non-rebreather mask immediately — any SpO2 below 95% requires supplemental oxygen.",
      "B. Agree and apply 2 L/min nasal cannula — a gradual approach is safer than high-flow.",
      "C. Explain that in certain cardiac lesions like HLHS, SpO2 of 70–80% is the expected baseline, and high-flow oxygen may actually worsen the physiology.",
      "D. Notify the cardiologist before making any decision, as SpO2 management requires a physician order in all HLHS patients."
    ],
    correct: ["C"],
    rationale: "In complex cyanotic lesions such as HLHS, ductal-dependent single-ventricle physiology, and certain forms of TOF, the expected baseline SpO2 is 70–80% — not 95–100%. High-flow oxygen causes vasodilation of the pulmonary vasculature, which decreases pulmonary vascular resistance (PVR). In single-ventricle physiology, lowering PVR allows too much blood to flow to the lungs, stealing from the systemic circulation and worsening systemic output. The nurse-aide's reflex to treat a low SpO2 with high-flow O2 is dangerous without knowing the cardiac diagnosis. Education about the expected range and careful adherence to physician orders for O2 targets is essential. The charge nurse's role is to explain the physiology, not simply defer all decisions to the cardiologist.",
    trap: "Any SpO2 below 95% triggers an O2 reflex in most nursing contexts — HLHS/single-ventricle physiology is the exception where high-flow O2 is harmful."
  },
  {
    id: "m10_21",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF — urine output monitoring",
    stem: "A nurse is monitoring strict intake and output for a 6-month-old with heart failure who weighs 7 kg. Over the past hour, the infant's urine output via catheter was 4 mL. How should the nurse interpret this finding?",
    options: [
      "A. Output is adequate — 4 mL/hr is within normal range for a 6-month-old.",
      "B. Output is below the minimum threshold of 1 mL/kg/hr (7 mL/hr for this infant) — the nurse should notify the provider.",
      "C. Output is excellent — the low output confirms the diuretics are not over-diuresing the infant.",
      "D. Output must be compared to the previous 24-hour total before any conclusions can be drawn."
    ],
    correct: ["B"],
    rationale: "The minimum acceptable urine output in infants and children is 1 mL/kg/hr. For a 7 kg infant, the minimum is 7 mL/hr. An output of 4 mL in one hour (0.57 mL/kg/hr) is below the minimum threshold and indicates decreased renal perfusion — a sign of worsening cardiac output or over-diuresis. The provider must be notified. This is not adequate (A is wrong). The low output does not confirm appropriate diuresis — it may indicate inadequate cardiac output or the kidneys not receiving enough flow (C is wrong). One-hour output can and should be acted upon when it falls below threshold — waiting for a 24-hour comparison delays care (D is wrong).",
    trap: "4 mL sounds like a reasonable number to a student without the weight-based calculation — the 1 mL/kg/hr rule is the clinical standard that makes 4 mL inadequate for a 7 kg infant."
  },
  {
    id: "m10_22",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Long-term CHD complications",
    stem: "A nurse is providing anticipatory guidance to the parents of a 6-month-old who has undergone successful surgical repair of a VSD. The parents ask if their child is now 'cured.' Which response by the nurse is most accurate?",
    options: [
      "A. 'Yes, the repair is complete — your child will not need cardiac follow-up after the first post-operative visit.'",
      "B. 'While surgical repair significantly improves outcomes, children with repaired CHD have ongoing risks including arrhythmias, pulmonary hypertension, and infective endocarditis, and require lifelong cardiology follow-up.'",
      "C. 'Your child is cured, but will need to avoid all strenuous physical activity for the rest of their life.'",
      "D. 'Surgical repair prevents all long-term complications, though a repeat surgery may be needed in adolescence.'"
    ],
    correct: ["B"],
    rationale: "Surgical repair of CHD significantly improves survival — 85% of CHD infants now survive into adulthood. However, repair does not eliminate all risk. Long-term complications include arrhythmias (from surgical disruption of conduction pathways, scarring, ventricular hypertrophy), infective endocarditis (turbulent flow across repaired structures), pulmonary hypertension (if L→R shunt existed long-term), and other cardiac issues. Lifelong cardiology follow-up is required. Telling parents the child is 'cured' is inaccurate and potentially dangerous — it may lead to non-adherence to follow-up. Activity restriction is not universal — most CHD children can participate in age-appropriate activities after repair.",
    trap: "Successful surgical repair leads to the false conclusion of 'cured' — the clinical reality is that CHD is managed, not eliminated, by repair."
  },
  {
    id: "m10_23",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF — fever management",
    stem: "A 5-month-old with heart failure and a large unrepaired VSD develops a temperature of 38.8°C (101.8°F) during the night shift. The infant is currently resting comfortably and there is a standing PRN acetaminophen order. The nurse decides to administer the acetaminophen. Which reasoning best supports this action?",
    options: [
      "A. Fever causes vasodilation, which decreases systemic vascular resistance and may worsen hypotension in this infant.",
      "B. Fever increases metabolic rate and oxygen demand, increasing cardiac workload in an infant with already limited cardiac reserve.",
      "C. Fever above 38.5°C increases the risk of febrile seizures in infants under 1 year old.",
      "D. Acetaminophen is ordered PRN and any temperature above normal warrants treatment per standing protocol."
    ],
    correct: ["B"],
    rationale: "In infants with heart failure, fever is especially dangerous because every 1°C increase in body temperature raises metabolic rate by approximately 10–13%, which proportionally increases oxygen demand. A heart with already limited reserve cannot meet this increased demand. Aggressive fever management (antipyretics, cooling measures) is a nursing priority in pediatric HF to minimize unnecessary increases in cardiac workload. Option A (vasodilation/SVR decrease) is true in fever physiology but is not the primary reason to treat fever in this patient. Option C is correct regarding febrile seizure risk but is a general pediatric concern — not specific to cardiac physiology and not the best answer here. Option D is policy-based reasoning, not clinical judgment.",
    trap: "Febrile seizure prevention sounds compelling as a reason — but the CARDIAC rationale (increased O2 demand) is specifically what makes fever dangerous in HF and is what the question is testing."
  },
  {
    id: "m10_24",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Digoxin mechanism",
    stem: "A nursing student asks the bedside nurse why digoxin makes the heart beat more strongly in a child with heart failure. Which explanation best describes the cellular mechanism?",
    options: [
      "A. Digoxin stimulates beta-1 adrenergic receptors in the myocardium, triggering the release of calcium from the sarcoplasmic reticulum.",
      "B. Digoxin inhibits the Na+/K+ ATPase pump, causing intracellular sodium to rise, which triggers increased sodium-calcium exchange and raises intracellular calcium available for contraction.",
      "C. Digoxin blocks calcium channels in the cell membrane, preventing calcium from leaving the cell and maintaining elevated intracellular calcium.",
      "D. Digoxin activates phosphodiesterase, increasing cyclic AMP and thereby increasing calcium sensitivity in the contractile proteins."
    ],
    correct: ["B"],
    rationale: "Digoxin inhibits the Na+/K+ ATPase pump on myocardial cell membranes. This pump normally ejects sodium out of the cell; inhibiting it causes intracellular sodium to accumulate. The Na/Ca exchanger (which moves Na in and Ca out) depends on the sodium gradient — with elevated intracellular Na, less calcium is exported, leading to elevated intracellular calcium. Higher intracellular calcium = more forceful actin-myosin crossbridge formation = increased contractility (positive inotropy). Option A describes sympathomimetic inotropy (dobutamine mechanism) — not digoxin. Option C describes calcium channel blockers in reverse — CCBs block calcium influx, reducing contraction. Option D describes milrinone's mechanism (PDE3 inhibitor). None of these are digoxin's mechanism.",
    trap: "Beta-1 stimulation (dobutamine) also increases intracellular calcium and contractility — students may confuse the upstream mechanism; digoxin uses the Na/K pump, not adrenergic receptors."
  },
  {
    id: "m10_25",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Digoxin — priority assessments before administration",
    stem: "A nurse is preparing to administer morning digoxin to a 9-month-old with heart failure. Which assessments are priority before giving the medication? Select all that apply.",
    options: [
      "A. Count the apical pulse for one full minute",
      "B. Assess the infant for signs of gastrointestinal symptoms (vomiting, poor feeding, anorexia)",
      "C. Check the morning serum digoxin level if one is ordered",
      "D. Measure blood pressure in all four extremities",
      "E. Review the most recent serum potassium level"
    ],
    correct: ["A", "B", "C", "E"],
    rationale: "(A) Apical pulse must be counted for a full minute before every dose — if below 90 bpm for this infant, hold and notify. (B) GI symptoms (vomiting, poor feeding) are the first sign of digoxin toxicity; presence of these symptoms before giving another dose warrants withholding and contacting the provider. (C) If a serum digoxin level is ordered, review it before giving the next dose — supratherapeutic level = hold and notify. (E) Potassium must be reviewed because hypokalemia dramatically increases digoxin toxicity risk — a low potassium level requires provider notification before proceeding. Option D (four-extremity BPs) is a cardiac assessment relevant to COA screening in neonates — it is not a pre-administration check specifically for digoxin and is not relevant to this 9-month-old on a stable digoxin regimen.",
    trap: "Four-extremity BPs are a valid cardiac assessment skill, but they are not part of the digoxin pre-administration safety check — this tests whether students can distinguish COA screening from digoxin safety protocol."
  },
  {
    id: "m10_26",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Spironolactone — K-sparing rationale with furosemide",
    stem: "A 7-month-old with heart failure is prescribed both furosemide and spironolactone. The parents ask why the infant needs two water pills. Which explanation best addresses their question?",
    options: [
      "A. Furosemide and spironolactone work on different parts of the kidney and are more effective together at removing fluid than either drug alone.",
      "B. Furosemide causes potassium loss, which increases digoxin toxicity risk; spironolactone is a potassium-sparing diuretic that offsets the potassium loss and provides additional fluid removal.",
      "C. Spironolactone is added when furosemide alone causes rebound fluid retention between doses.",
      "D. The two medications must always be used together by FDA requirement for pediatric heart failure patients."
    ],
    correct: ["B"],
    rationale: "Furosemide is a loop diuretic that causes potassium wasting, which is dangerous in a child on digoxin (hypokalemia increases digoxin toxicity risk). Spironolactone is an aldosterone antagonist (potassium-sparing diuretic) that works in the collecting duct — it removes fluid and sodium while retaining potassium. Pairing them provides effective diuresis while mitigating the hypokalemia risk from furosemide alone. This combination is a standard practice in pediatric HF management. Option A is partially true (complementary sites of action) but misses the key clinical reason — potassium preservation. Option C (rebound fluid retention) is not the clinical rationale for this combination. Option D is false — there is no FDA mandate for this combination.",
    trap: "Students may choose A as it's partially correct — but the specific reason for this combination in a digoxin patient is potassium preservation to prevent digoxin toxicity."
  },
  {
    id: "m10_27",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "HF — concentrated formula, gradual increase",
    stem: "A dietitian recommends increasing the caloric density of an infant's formula from 20 kcal/oz to 28 kcal/oz to meet the 150 kcal/kg/day requirement for a 3-month-old with heart failure. The nurse's care plan should include which teaching point for the parents?",
    options: [
      "A. Increase caloric density rapidly to reach target within 24 hours, as the infant's metabolic needs are urgent.",
      "B. Caloric density should be increased gradually over several days to prevent diarrhea, which could lead to dehydration and electrolyte imbalances.",
      "C. Concentrated formula can be mixed at home by adding less water to standard powder formula to any desired concentration.",
      "D. The infant should not be breastfed once concentrated formula is initiated."
    ],
    correct: ["B"],
    rationale: "Caloric density of formula must be increased gradually — too rapid an increase in osmolality causes osmotic diarrhea, which leads to fluid loss and electrolyte imbalances. This is especially dangerous in a cardiac infant already at risk for fluid shifts and electrolyte problems. The increase should proceed stepwise (e.g., 20 → 22 → 24 → 27 kcal/oz over days). Rapid escalation to target in 24 hours ignores this risk. Home mixing of formula concentration must be done precisely according to dietitian or manufacturer instructions — arbitrary concentration by reducing water risks dangerous hyperosmolarity. Breastfeeding can often be continued alongside or alternated with concentrated formula — it is not contraindicated.",
    trap: "The infant's caloric needs are urgent, making rapid escalation sound reasonable — the diarrhea/dehydration risk from rapid concentration increase is the reason it must be gradual."
  },
  {
    id: "m10_chain1_q1",
    type: "CHAIN",
    chain_id: "m10_chain1",
    chain_scenario: "A 6-month-old with heart failure secondary to a large VSD is admitted to the pediatric cardiology unit. The infant is receiving digoxin 0.025 mg PO daily, furosemide 2 mg/kg/day PO, and spironolactone. On morning rounds, the nurse notes the infant is lethargic, feeding poorly, and vomited twice overnight. The apical heart rate on assessment is 78 bpm. Morning labs show potassium 2.9 mEq/L and serum digoxin level 3.2 ng/mL.",
    concept: "Digoxin toxicity — recognition",
    stem: "The nurse recognizes this clinical picture as probable digoxin toxicity. Which combination of findings best supports this conclusion?",
    options: [
      "A. Lethargy and poor feeding alone — these are nonspecific signs of any illness in infants.",
      "B. Vomiting, lethargy, HR of 78 bpm (below the 90 bpm infant threshold), serum digoxin level of 3.2 ng/mL (above therapeutic range 0.8–2.0 ng/mL), and hypokalemia which amplifies digoxin binding.",
      "C. Potassium of 2.9 mEq/L and furosemide use — this indicates electrolyte imbalance from diuretic overuse, not toxicity.",
      "D. The serum digoxin level of 3.2 ng/mL alone is sufficient to confirm toxicity and act without other clinical data."
    ],
    correct: ["B"],
    rationale: "Digoxin toxicity is a clinical-plus-laboratory diagnosis. The complete picture here: (1) GI toxicity signs — vomiting and poor feeding (the G in GBV, first signs in infants); (2) Bradycardia — HR 78 is below the infant hold threshold of 90 bpm (the B in GBV); (3) Supratherapeutic serum level — 3.2 ng/mL vs. therapeutic 0.8–2.0 ng/mL; (4) Hypokalemia (K 2.9) — low potassium amplifies digoxin binding by reducing competition at Na+/K+ ATPase, producing toxicity at levels that might otherwise be tolerated. Option A is true but insufficient — nonspecific signs alone don't confirm toxicity; the combination does. Option C partially explains the hypokalemia but doesn't account for the supratherapeutic digoxin level and clinical signs. Option D is incorrect — clinical signs must accompany lab values; a level of 3.2 without symptoms would still require holding and monitoring, but the full picture confirms toxicity.",
    trap: "The serum level alone seems like enough — but toxicity is defined by the combination of clinical signs AND level; furosemide-driven hypokalemia is what makes 3.2 ng/mL dangerous in this patient."
  },
  {
    id: "m10_chain1_q2",
    type: "CHAIN",
    chain_id: "m10_chain1",
    chain_scenario: "A 6-month-old with heart failure secondary to a large VSD is admitted to the pediatric cardiology unit. The infant is receiving digoxin 0.025 mg PO daily, furosemide 2 mg/kg/day PO, and spironolactone. On morning rounds, the nurse notes the infant is lethargic, feeding poorly, and vomited twice overnight. The apical heart rate on assessment is 78 bpm. Morning labs show potassium 2.9 mEq/L and serum digoxin level 3.2 ng/mL.",
    concept: "Digoxin toxicity — nursing actions",
    stem: "The nurse has identified probable digoxin toxicity. Which sequence of nursing actions is most appropriate?",
    options: [
      "A. Administer the morning digoxin dose, hold the furosemide, replace potassium via IV, and recheck digoxin level in 2 hours.",
      "B. Hold the digoxin dose, hold the furosemide, notify the provider immediately with the clinical picture and lab values, and prepare for possible IV potassium replacement and cardiac monitoring.",
      "C. Hold the digoxin dose, administer the furosemide as ordered, notify the provider of the digoxin level, and place the infant on continuous cardiac monitoring.",
      "D. Administer Digibind immediately based on the supratherapeutic level, then notify the provider."
    ],
    correct: ["B"],
    rationale: "With confirmed toxicity signs and supratherapeutic level: (1) Hold digoxin — do not administer another dose that will worsen toxicity. (2) Hold furosemide — it is causing the hypokalemia that is amplifying digoxin toxicity; giving another dose worsens the electrolyte situation. (3) Notify the provider immediately with the full clinical and laboratory picture — provider must decide on potassium replacement route (IV vs oral), cardiac monitoring orders, and whether Digibind is indicated. (4) Prepare for IV potassium replacement (the safest management for severe hypokalemia + digoxin toxicity) and place on cardiac monitor. Option A is wrong — giving digoxin with these findings is dangerous. Option C holds digoxin but continues furosemide — wrong; furosemide is making the hypokalemia worse. Option D — Digibind requires a provider order and is for SEVERE or life-threatening toxicity, not for all supratherapeutic levels; the nurse does not independently administer Digibind.",
    trap: "Giving furosemide seems unrelated to digoxin toxicity — but furosemide is causing the hypokalemia that is converting a manageable digoxin level into toxicity."
  },
  {
    id: "m10_chain1_q3",
    type: "CHAIN",
    chain_id: "m10_chain1",
    chain_scenario: "A 6-month-old with heart failure secondary to a large VSD is admitted to the pediatric cardiology unit. The infant is receiving digoxin 0.025 mg PO daily, furosemide 2 mg/kg/day PO, and spironolactone. On morning rounds, the nurse notes the infant is lethargic, feeding poorly, and vomited twice overnight. The apical heart rate on assessment is 78 bpm. Morning labs show potassium 2.9 mEq/L and serum digoxin level 3.2 ng/mL.",
    concept: "Digoxin toxicity — monitoring and follow-up",
    stem: "The provider orders IV potassium replacement and digoxin hold. Six hours later, potassium is now 3.6 mEq/L and serum digoxin level is 1.6 ng/mL. The infant's HR is 102 bpm and she is alert and feeding better. The provider plans to restart digoxin at the same dose tomorrow. Which nursing action is most important before the next digoxin dose is administered?",
    options: [
      "A. Administer the next dose as ordered since the serum level is now therapeutic and HR is above hold threshold.",
      "B. Recheck a serum potassium level before the next digoxin dose to confirm it remains above 3.5 mEq/L before resuming the drug.",
      "C. Request the provider reconsider the digoxin dose, as the original dose caused toxicity and should be permanently reduced.",
      "D. Place the infant on continuous cardiac monitoring for 24 hours before restarting digoxin to identify any residual arrhythmias."
    ],
    correct: ["B"],
    rationale: "Before restarting digoxin after a toxicity episode driven partly by hypokalemia, the potassium level must be confirmed to be within normal limits. Even though potassium was 3.6 mEq/L 6 hours ago, potassium shifts can recur — especially if furosemide is still being given (even at adjusted doses). A repeat potassium check immediately before the next digoxin dose ensures the electrolyte environment is safe for reintroduction. The apical rate must also be checked. Option A is insufficient — checking level and HR alone doesn't confirm the electrolyte environment is safe. Option C is a clinical decision for the provider, not a nursing action — if the original dose and concurrent diuretic combination caused the problem, that is a medical management decision. Option D (24-hour monitoring before restart) is overly conservative and not standard practice when the patient has clinically improved and levels are therapeutic.",
    trap: "Checking the digoxin level and HR seem like sufficient safety checks — but the entire toxicity episode was driven by hypokalemia, making potassium the most critical safety check before restart."
  }
];

const M11_QUESTIONS = [
  {
    id: "m11_1",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Anterior fontanelle assessment",
    stem: "A nurse is assessing a 10-month-old during a well-child visit. The infant is lying supine and calm. The nurse notes the anterior fontanelle is bulging and tense. Which finding best explains this assessment?",
    options: [
      "A. The infant is dehydrated and needs oral rehydration",
      "B. This is a normal finding at 10 months of age",
      "C. The fontanelle is bulging due to increased intracranial pressure",
      "D. The posterior fontanelle has not yet closed"
    ],
    correct: ["C"],
    rationale: "A bulging, tense anterior fontanelle in a calm, supine infant is an abnormal finding indicating increased ICP. The anterior fontanelle normally closes between 18 months and 2 years; at 10 months it is still open and should be soft and flat when the infant is calm and supine. Bulging in this position is a reliable early sign of ICP elevation. Dehydration causes a sunken, not bulging, fontanelle. The posterior fontanelle closes at 2-3 months and is unrelated here.",
    trap: "Students select dehydration because they associate fontanelle changes with fluid status — but dehydration causes a SUNKEN fontanelle, not bulging."
  },
  {
    id: "m11_2",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Fontanelle closure timing",
    stem: "During a 3-month well-child visit, a parent asks the nurse when the soft spots on their infant's head will close. The nurse is palpating the infant's skull and finds only one fontanelle remains open. Which response is most accurate?",
    options: [
      "A. Both fontanelles should still be open at this age; the closed one requires evaluation",
      "B. The posterior fontanelle normally closes at 2-3 months; the anterior remains open until 18 months to 2 years",
      "C. Both fontanelles normally close by 6 months of age",
      "D. The anterior fontanelle closes first, then the posterior closes by 12 months"
    ],
    correct: ["B"],
    rationale: "The posterior fontanelle closes at 2-3 months, so having only one open fontanelle at 3 months is expected. The anterior fontanelle remains open until 18 months to 2 years. Option A is wrong — posterior closure at 3 months is normal, not concerning. Option C is wrong — anterior closure at 6 months would be premature and could restrict brain growth (craniosynostosis). Option D reverses the order — it is the posterior that closes first.",
    trap: "Students reverse the closure order, thinking the anterior closes first because it is smaller on a diagram."
  },
  {
    id: "m11_3",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "CPP calculation and ICP threshold",
    stem: "A 7-year-old with a traumatic brain injury has a blood pressure of 100/60 mmHg and an ICP reading of 18 mmHg via external ventricular drain. The nurse calculates the cerebral perfusion pressure and determines the appropriate action. Which interpretation is correct?",
    options: [
      "A. CPP is 55 mmHg and within the normal pediatric range; no action required",
      "B. CPP is 55 mmHg and within range, but ICP of 18 mmHg exceeds the normal limit of 15 mmHg and requires immediate provider notification",
      "C. CPP is 42 mmHg, indicating cerebral ischemia requiring vasopressor initiation",
      "D. CPP is 73 mmHg, which is too high and requires antihypertensive therapy"
    ],
    correct: ["B"],
    rationale: "MAP = (SBP + 2×DBP) / 3 = (100 + 120) / 3 = 73 mmHg. CPP = MAP - ICP = 73 - 18 = 55 mmHg. Normal pediatric CPP is 40-60 mmHg, so 55 mmHg is within range. However, ICP of 18 mmHg exceeds the normal limit of 15 mmHg and requires immediate provider notification regardless of whether CPP is currently maintained. The ICP threshold is an independent actionable trigger. Option C calculates CPP incorrectly. Option D confuses MAP with CPP.",
    trap: "Students focus only on CPP being 'within range' and miss that ICP >15 mmHg is itself a notification threshold regardless of CPP."
  },
  {
    id: "m11_4",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "GCS intubation threshold",
    stem: "A 9-year-old is brought to the ED following a motor vehicle accident. Initial assessment reveals: eyes open to painful stimulation, moaning with no recognizable words, and arms flexing abnormally to pain. The nurse calculates the GCS and prepares for which priority intervention?",
    options: [
      "A. Administer IV mannitol to reduce cerebral edema",
      "B. Prepare for endotracheal intubation",
      "C. Obtain a CT scan of the head immediately",
      "D. Elevate the head of bed to 30 degrees and reassess in 15 minutes"
    ],
    correct: ["B"],
    rationale: "GCS calculation: Eyes = 2 (pain), Verbal = 2 (sounds/moaning), Motor = 3 (abnormal flexion) = total 7. GCS ≤8 requires intubation to protect the airway — the child no longer has reliable protective reflexes. Mannitol may be ordered but is not the priority over airway protection. CT scan is important but cannot be done safely without airway security first. HOB elevation is an ICP intervention but cannot be prioritized over ABC.",
    trap: "Students select CT scan first because it feels like the logical next diagnostic step after trauma; airway protection via intubation must come first when GCS ≤8."
  },
  {
    id: "m11_5",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "First nursing intervention for increased ICP",
    stem: "A 6-year-old with bacterial meningitis develops increasing irritability, projectile vomiting, and a bulging anterior fontanelle. The nurse prepares to implement the priority intervention for increased ICP. Which action should be performed first?",
    options: [
      "A. Administer IV mannitol as ordered",
      "B. Elevate the head of bed to 15-30 degrees with the head in midline position",
      "C. Dim the lights and reduce noise in the room",
      "D. Place the child on seizure precautions"
    ],
    correct: ["B"],
    rationale: "The first intervention for increased ICP is positioning: HOB 15-30 degrees with head midline. This promotes venous drainage from the brain and is the foundational intervention before any pharmacologic measures. Midline positioning prevents jugular vein compression. Mannitol is a valid intervention but is a medication requiring an order and is not performed before positioning. Reducing stimulation is appropriate but secondary to positioning. Seizure precautions are supportive but not the priority first step.",
    trap: "Students select mannitol as the first intervention because it directly treats edema, missing that the positioning intervention is immediate, non-pharmacologic, and always first."
  },
  {
    id: "m11_6",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Corticosteroids — TBI contraindication",
    stem: "An 8-year-old is admitted to the PICU following a severe head injury from a fall. The ICP is 22 mmHg and rising. A new medical resident orders IV dexamethasone. Which response by the nurse is most appropriate?",
    options: [
      "A. Administer the dexamethasone as ordered; corticosteroids reduce cerebral edema",
      "B. Hold the dexamethasone and clarify the order; corticosteroids are not indicated for traumatic brain edema",
      "C. Administer half the dose and reassess ICP in 30 minutes",
      "D. Contact pharmacy to substitute methylprednisolone, which is safer for pediatric TBI"
    ],
    correct: ["B"],
    rationale: "Corticosteroids are NOT recommended for cerebral edema secondary to traumatic brain injury — evidence shows no benefit and potential harm. This is a critical distinction: corticosteroids ARE indicated for bacterial meningitis to reduce inflammation, but NOT for traumatic edema. The nurse must hold and clarify the order. Options A, C, and D all involve administering a corticosteroid, which is contraindicated in this context regardless of dose or agent.",
    trap: "Students know corticosteroids reduce inflammation and wrongly apply this to TBI — the contraindication is specific to traumatic and non-infectious cerebral edema."
  },
  {
    id: "m11_7",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Epidural hematoma lucid interval",
    stem: "An 11-year-old falls off a skateboard and briefly loses consciousness, then appears completely alert and normal in the ED. Parents state he was 'knocked out for about 30 seconds.' Vital signs are stable. The child says he feels fine and wants to go home. Which nursing action is the priority?",
    options: [
      "A. Discharge the child with return precautions since he has returned to baseline",
      "B. Advise parents to wake the child every 2 hours overnight to check responsiveness",
      "C. Anticipate CT scan and continued observation; this presentation is consistent with an epidural hematoma",
      "D. Administer oral ibuprofen for headache and reassess in 1 hour"
    ],
    correct: ["C"],
    rationale: "Brief loss of consciousness followed by an apparent return to normal is the classic lucid interval seen with epidural hematoma. The middle meningeal artery bleeds after a temporal skull fracture; arterial pressure allows initial partial herniation, brief LOC, then apparent normalization before rapid deterioration. This child must NOT be discharged during the lucid interval — an epidural hematoma must be ruled out with CT. Options A and D are dangerous — the child will deteriorate. Option B is a common teaching for mild concussion but insufficient when LOC occurred.",
    trap: "The child's apparently normal presentation after LOC is precisely the trap — the lucid interval is the hallmark of epidural hematoma, not reassurance."
  },
  {
    id: "m11_8",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Bacterial meningitis CSF findings",
    stem: "A lumbar puncture is performed on a 4-year-old with fever, stiff neck, and photophobia. The CSF results show: cloudy appearance, glucose 25 mg/dL (serum glucose 90 mg/dL), protein 180 mg/dL, and WBC 1,200 cells/mm³ with 90% neutrophils. The nurse interprets these findings as consistent with which condition?",
    options: [
      "A. Viral meningitis; the cloudy appearance indicates viral inflammation",
      "B. Normal CSF; these values fall within acceptable pediatric ranges",
      "C. Bacterial meningitis; low glucose, high protein, and neutrophil predominance confirm bacterial infection",
      "D. Tuberculous meningitis; the high protein level is the distinguishing feature"
    ],
    correct: ["C"],
    rationale: "Bacterial meningitis CSF findings: cloudy/turbid appearance, LOW glucose (bacteria consume glucose — 25 mg/dL against serum 90 is severely low), HIGH protein (bacterial metabolic byproducts), and elevated WBC with neutrophil predominance. Viral meningitis CSF is CLEAR with normal or mildly elevated glucose, normal or mild protein elevation, and lymphocyte predominance. These findings are unmistakably bacterial. TB meningitis shows lymphocyte predominance and a more gradual onset, not the acute presentation here.",
    trap: "Students select viral because they remember 'meningitis is viral more often' — the CSF characteristics are opposite; bacterial is the only answer fitting these values."
  },
  {
    id: "m11_9",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Bacterial meningitis treatment timing",
    stem: "A 3-year-old arrives in the ED with high fever, neck stiffness, and a petechial rash that does not blanch when a glass is pressed against it. The nurse notifies the provider. Which statement about treatment timing is correct?",
    options: [
      "A. Wait for CSF culture results to confirm bacterial meningitis before starting antibiotics",
      "B. Begin IV antibiotics immediately; do not delay for CSF culture if the child is hemodynamically unstable",
      "C. Administer IV steroids first to reduce inflammation before starting antibiotics",
      "D. Obtain blood cultures and start antibiotics only after CT scan rules out increased ICP"
    ],
    correct: ["B"],
    rationale: "In bacterial meningitis, do NOT delay antibiotics waiting for culture results if the child is clinically deteriorating. The non-blanching purpuric rash (glass test positive) is a meningococcal emergency with high mortality if treatment is delayed even minutes. CSF culture is ideally obtained first if it can be done without delaying antibiotics, but treatment takes priority over diagnostic certainty. Steroids (dexamethasone) are given with antibiotics, not before. CT before LP is appropriate for suspected herniation, but antibiotics must start regardless.",
    trap: "Students select waiting for culture results, applying standard 'culture before antibiotics' logic — meningococcemia can be fatal within hours; antibiotics cannot wait."
  },
  {
    id: "m11_10",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Febrile seizure — antipyretics and recurrence",
    stem: "The parents of a 2-year-old who experienced a first febrile seizure ask the nurse: 'If we give Tylenol every time he has a fever, will that stop the seizures from coming back?' Which response by the nurse is most accurate?",
    options: [
      "A. 'Yes, keeping his fever below 101°F with Tylenol will prevent future febrile seizures'",
      "B. 'Antipyretics do not prevent febrile seizure recurrence; the seizures are triggered by the rapid rise in temperature, not the absolute temperature'",
      "C. 'You should use tepid sponge baths combined with Tylenol for the best fever control'",
      "D. 'Your doctor will likely prescribe daily anticonvulsant medication to prevent recurrence'"
    ],
    correct: ["B"],
    rationale: "Antipyretics do NOT prevent febrile seizure recurrence. Febrile seizures are triggered by the RAPID RISE in temperature, not the peak temperature — accordingly, pre-treating with antipyretics does not eliminate the rapid temperature spike that triggers the seizure. Option A is incorrect — this is the most common parental misconception and must not be reinforced. Option C is wrong — tepid sponge baths are NOT recommended and do not lower core temperature effectively. Option D is incorrect — prophylactic AEDs are not given between seizures for febrile seizures.",
    trap: "Parents and students assume controlling fever = preventing the seizure; the trigger is the speed of temperature rise, not the number on the thermometer."
  },
  {
    id: "m11_11",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Seizure — first nursing action",
    stem: "A nurse is at the bedside of a 5-year-old with epilepsy when the child begins a generalized tonic-clonic seizure. The child's arms are jerking and teeth are clenched. Which action should the nurse perform first?",
    options: [
      "A. Insert an oral airway to maintain the airway during the seizure",
      "B. Hold the child's arms firmly to prevent injury from the jerking movements",
      "C. Turn the child to the lateral position and begin timing the seizure",
      "D. Immediately administer IV lorazepam per standing seizure order"
    ],
    correct: ["C"],
    rationale: "During a seizure, the first actions are to turn the child to the lateral position to prevent aspiration and to begin timing the seizure. Timing determines if >5 minutes (status epilepticus threshold requiring medication). Nothing should be inserted into the mouth — this is contraindicated and can cause dental injury, broken equipment aspiration, or provider injury. The child should NOT be restrained — this causes musculoskeletal injury. Medication (lorazepam) is appropriate if the seizure exceeds 5 minutes, not as the first action.",
    trap: "Students insert an oral airway because airway is always first — but inserting anything in the mouth during an active seizure is explicitly contraindicated."
  },
  {
    id: "m11_12",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Acute seizure medication without IV access",
    stem: "A 4-year-old with no IV access begins a generalized seizure in the emergency department triage area. The seizure has lasted 6 minutes. Which medication and route does the nurse prepare as the priority first-line treatment?",
    options: [
      "A. Fosphenytoin IV — slow push over 30 minutes",
      "B. Diazepam rectally or midazolam intranasally",
      "C. Levetiracetam IV once access is established",
      "D. Phenobarbital IM injection"
    ],
    correct: ["B"],
    rationale: "For an active seizure >5 minutes without IV access, first-line agents are diazepam rectally or midazolam intranasally/buccally — these routes are available without IV access and act rapidly. Benzodiazepines are always first-line for acute seizure termination. Fosphenytoin is a maintenance antiepileptic given slowly and is NOT first-line for acute termination. Levetiracetam requires IV access and is not the first choice. Phenobarbital IM is not recommended for acute seizure management in current pediatric practice.",
    trap: "Students select fosphenytoin because they know it is an antiepileptic IV medication — but it is for maintenance, not acute termination, and must be given slowly."
  },
  {
    id: "m11_13",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Post-ictal orientation order",
    stem: "A 7-year-old has just experienced a tonic-clonic seizure lasting 3 minutes. The seizure has stopped and the child is now in the post-ictal phase. The nurse begins neurological reassessment. In which order does the nurse expect the child to regain orientation?",
    options: [
      "A. Time, then place, then person",
      "B. Person, then place, then time",
      "C. Place, then person, then time",
      "D. All three return simultaneously within 2-3 minutes"
    ],
    correct: ["B"],
    rationale: "Orientation after a seizure (and after any LOC event) returns in a specific order: Person first (who am I), then Place (where am I), then Time (what day/time is it). Time orientation is the most complex cognitive function and returns last. Nurses use this sequence to assess the depth and progress of recovery from the post-ictal state.",
    trap: "Students select time first because they think of time as the simplest question to ask — but time orientation is actually the most complex and returns last."
  },
  {
    id: "m11_14",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "EVD transducer leveling",
    stem: "A 10-year-old with severe TBI has an external ventricular drain in place. The nurse is preparing to level the EVD transducer. At which anatomical landmark should the transducer be positioned?",
    options: [
      "A. The top of the head (vertex of the skull)",
      "B. The level of the external auditory meatus (tragus of the ear)",
      "C. The midclavicular line at the fourth intercostal space",
      "D. The level of the outer canthus of the eye"
    ],
    correct: ["B"],
    rationale: "The EVD transducer must be leveled at the external auditory meatus (tragus of the ear), which corresponds to the level of the foramen of Monro. This is the standard reference point for ICP monitoring. If the transducer is too high, ICP readings are falsely low; too low, falsely high. Option C describes the phlebostatic axis used for CVP/hemodynamic monitoring — not EVD. The tragus is the external landmark used clinically.",
    trap: "Students select the top of the head or the outer canthus, applying the wrong anatomical reference — the tragus is the correct external landmark."
  },
  {
    id: "m11_15",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Cushing's triad significance",
    stem: "A nurse is monitoring a 12-year-old with a brain tumor who is receiving ICP management. Over the past hour the blood pressure has risen from 110/68 to 148/58, the heart rate has decreased from 88 to 48 beats/min, and the respiratory pattern has become irregular and gasping. Which interpretation is correct?",
    options: [
      "A. These are signs of compensation; the body is successfully maintaining CPP",
      "B. The child is experiencing Cushing's triad, indicating impending herniation — this is a neurosurgical emergency",
      "C. The bradycardia indicates adequate sedation; the BP rise is an adverse effect of mannitol",
      "D. The respiratory change indicates the child needs supplemental oxygen via nasal cannula"
    ],
    correct: ["B"],
    rationale: "Cushing's triad = hypertension + bradycardia + irregular respirations. This is a LATE and ominous sign of severely increased ICP and impending brain herniation. The hypertension is a compensatory attempt to maintain CPP against rising ICP — not a sign that compensation is succeeding. The bradycardia is a baroreceptor reflex response to the hypertension. Irregular respirations indicate brainstem compression. This is a neurosurgical emergency.",
    trap: "Students interpret the rising BP as 'compensation working' — it is compensatory but represents the body at its final limit before herniation, not a stable state."
  },
  {
    id: "m11_16",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Decerebrate vs decorticate posturing",
    stem: "A nurse is assessing a 9-year-old who sustained a brainstem injury in a diving accident. During stimulation, the child's arms extend rigidly and pronate, and both legs extend. The nurse documents this finding and reports it to the provider because this finding indicates which condition?",
    options: [
      "A. Decorticate posturing, indicating damage above the midbrain",
      "B. Decerebrate posturing, indicating brainstem involvement with a worse prognosis than decorticate",
      "C. Normal extensor response to painful stimuli in a child of this age",
      "D. Decorticate posturing, indicating cortical damage with a better prognosis than decerebrate"
    ],
    correct: ["B"],
    rationale: "Decerebrate posturing involves extension and pronation of all four extremities, indicating brainstem involvement and carrying a worse prognosis than decorticate. Decorticate posturing involves arms FLEXED to the core with legs extended — it represents damage above the midbrain and is less severe. The diving accident mechanism (brainstem injury) is consistent with decerebrate presentation. This is never a normal finding.",
    trap: "Students confuse decorticate and decerebrate — the key: decorticate = arms flexed (curled to core); decerebrate = all extended (like a stiff board)."
  },
  {
    id: "m11_17",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "VP shunt malfunction recognition",
    stem: "A 5-year-old with a ventriculoperitoneal shunt placed 8 months ago for hydrocephalus is brought to the ED by parents who report sudden onset of severe headache, vomiting, and difficulty waking. Prior to this episode, the child had been at baseline. Which priority action should the nurse anticipate?",
    options: [
      "A. Position the child flat to maximize CSF flow through the shunt",
      "B. Administer oral acetaminophen for the headache and monitor for fever",
      "C. Anticipate CT scan of the head to evaluate for shunt obstruction",
      "D. Obtain a stool culture to evaluate for gastroenteritis causing vomiting"
    ],
    correct: ["C"],
    rationale: "Sudden return of ICP symptoms (headache, vomiting, change in LOC) in a child with a known VP shunt indicates shunt obstruction until proven otherwise. The first diagnostic step is CT head to assess ventricular size and confirm obstruction. The highest risk period for shunt infection is the first 6 months; at 8 months, obstruction is the primary concern. Lying flat does not facilitate shunt drainage. Oral acetaminophen delays diagnosis of a potentially life-threatening obstruction.",
    trap: "Students consider gastroenteritis because vomiting is present — but sudden-onset vomiting WITH headache and LOC change in a VP shunt patient means shunt failure first."
  },
  {
    id: "m11_18",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Mannitol — therapeutic response",
    stem: "A 10-year-old with severe TBI has an ICP of 24 mmHg. The provider orders mannitol 0.5 g/kg IV. The nurse administers this medication and monitors for therapeutic effect. Which assessment finding indicates the mannitol is working as intended?",
    options: [
      "A. Blood glucose level rising from 95 to 130 mg/dL",
      "B. Urine output increasing significantly over the next hour",
      "C. Heart rate decreasing from 110 to 85 beats/min",
      "D. Bilateral lung crackles developing on auscultation"
    ],
    correct: ["B"],
    rationale: "Mannitol is an osmotic diuretic that pulls water from brain cells into the bloodstream and eliminates it via the kidneys. Increased urine output is the expected and desired therapeutic effect — it indicates the drug is working and fluid is being removed from the cerebral compartment. Blood glucose changes are associated with corticosteroids, not mannitol. Heart rate decrease is not a primary indicator of mannitol effect. Bilateral crackles indicate pulmonary edema — a complication, not a therapeutic response.",
    trap: "Students select heart rate decrease, thinking ICP lowering should calm the compensatory tachycardia — but the direct indicator of mannitol working is the diuresis."
  },
  {
    id: "m11_19",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Empiric treatment of meningitis",
    stem: "A 7-year-old is admitted with fever, headache, and neck stiffness. CSF results are pending. The child is alert and neurologically intact. While waiting for culture results, which management approach is most appropriate?",
    options: [
      "A. Wait for culture results before starting any treatment; unnecessary antibiotics cause harm",
      "B. Begin IV antibiotics empirically, treating as bacterial meningitis until culture confirms viral",
      "C. Begin oral antibiotics since the child is alert and hemodynamically stable",
      "D. Administer acyclovir only, since viral meningitis is far more common than bacterial"
    ],
    correct: ["B"],
    rationale: "Meningitis must be treated empirically as bacterial until CSF culture confirms viral. The consequences of untreated bacterial meningitis (death, permanent disability, hearing loss) far outweigh the risk of a course of antibiotics later found unnecessary. Option A is dangerous — bacterial meningitis progresses rapidly. Oral antibiotics are inadequate for CNS infection — IV is required for adequate CSF penetration. Acyclovir alone would leave bacterial meningitis untreated.",
    trap: "Students reason 'viral is more common' and delay antibiotics — but clinical decision-making requires treating the worst-case scenario until ruled out."
  },
  {
    id: "m11_20",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Febrile seizure recurrence and prognosis",
    stem: "A parent whose 18-month-old just had a first febrile seizure asks: 'Is my child going to have epilepsy? Will this happen again?' Which response by the nurse is most accurate?",
    options: [
      "A. 'Approximately 50% of children who have one febrile seizure will develop epilepsy'",
      "B. 'Your child will not have another seizure as long as fevers are treated promptly with Tylenol'",
      "C. 'About 1 in 3 children will have another febrile seizure, but only 1% of children with febrile seizures develop epilepsy'",
      "D. 'If the seizure lasted less than 5 minutes, there is no recurrence risk'"
    ],
    correct: ["C"],
    rationale: "Recurrence risk for febrile seizures is approximately 1/3 (30%). The risk of developing epilepsy after febrile seizures is only about 1% — essentially the same as the general population. Option A dramatically overstates epilepsy risk. Option B is incorrect — antipyretics do not prevent recurrence. Option D is false — seizure duration is not a predictor of recurrence risk.",
    trap: "Parents overestimate the epilepsy risk because seizures are alarming — the 1% epilepsy figure is the reassuring key teaching point."
  },
  {
    id: "m11_21",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "MITTENS — first action in altered mental status",
    stem: "A 4-year-old is brought to the ED with sudden onset altered mental status, lethargy, and ataxia. Parents deny any fever, trauma, or known medical history. The nurse uses the MITTENS framework to generate a differential. Which nursing action has the highest priority?",
    options: [
      "A. Obtain CSF via lumbar puncture to rule out meningitis",
      "B. Check blood glucose immediately",
      "C. Obtain a detailed family psychiatric history",
      "D. Place the child in Trendelenburg position to improve cerebral perfusion"
    ],
    correct: ["B"],
    rationale: "MITTENS: Metabolic causes (including hypoglycemia) are the most rapidly reversible and potentially lethal causes of acute altered mental status. Blood glucose must be checked immediately — hypoglycemia is treated in seconds and can reverse LOC completely. If untreated, hypoglycemia causes irreversible brain damage. LP should not be the first action — more immediate metabolic causes must be excluded first. Trendelenburg is never appropriate for altered mental status and may worsen ICP.",
    trap: "Students jump to LP for meningitis because altered mental status + ataxia suggests CNS infection — metabolic causes must be excluded first with a stat glucose."
  },
  {
    id: "m11_22",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Rising head circumference as ICP indicator",
    stem: "A community health nurse is reviewing well-child visit data for a 9-month-old. Head circumference has increased from the 50th percentile at birth to the 95th percentile over three visits. The infant's parents report the child has been irritable and feeding poorly. Which interpretation and action is most appropriate?",
    options: [
      "A. Head circumference naturally tracks up in percentiles during the first year; reassure parents",
      "B. The rising head circumference combined with irritability and poor feeding is the most reliable early indicator of increased ICP in this age group and requires immediate evaluation",
      "C. Measure head circumference again at the 12-month visit; single measurements are unreliable",
      "D. This likely indicates familial macrocephaly; obtain parent head circumference measurements"
    ],
    correct: ["B"],
    rationale: "Rising head circumference across percentiles (50th to 95th over serial measurements) in an infant with open sutures is the most reliable early indicator of increased ICP. In infants, patent sutures allow skull expansion to accommodate rising ICP, masking other signs. Combined with irritability and poor feeding, this triad warrants immediate evaluation for hydrocephalus or other causes of increased ICP. Crossing percentile lines upward is not normal and cannot be dismissed. Familial macrocephaly is a diagnosis of exclusion, not the first consideration when symptomatic.",
    trap: "Students note the infant is 'growing' and reassure parents — crossing percentile lines upward combined with symptoms is a red flag requiring immediate evaluation."
  },
  {
    id: "m11_23",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Nursing interventions for increased ICP",
    stem: "A nurse is caring for a 7-year-old with severe traumatic brain injury and an ICP of 20 mmHg. Which nursing interventions are appropriate? Select all that apply.",
    options: [
      "A. Position the head of bed at 15-30 degrees with head in midline",
      "B. Perform nasopharyngeal suctioning every 2 hours to maintain airway patency",
      "C. Cluster nursing care activities to minimize the number of times the child is disturbed",
      "D. Apply a cooling blanket if the temperature rises above 38°C",
      "E. Administer IV dexamethasone as ordered to reduce cerebral edema"
    ],
    correct: ["A", "C", "D"],
    rationale: "A: HOB 15-30 degrees with midline positioning is the foundational ICP intervention promoting venous drainage. C: Clustering care minimizes stimulation-induced ICP spikes — each interaction transiently raises ICP. D: Fever increases cerebral metabolic demand, worsening ICP — temperature control is a core intervention. B is WRONG: routine scheduled suctioning increases ICP and should be avoided unless clinically necessary, never performed on a fixed schedule. E is WRONG: corticosteroids are contraindicated for traumatic brain edema — they are used for bacterial meningitis, not TBI.",
    trap: "Students select suctioning (B) because airway management is always appropriate — but routine suctioning is a stimulus that raises ICP and is explicitly contraindicated without clear clinical need."
  },
  {
    id: "m11_24",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Nursing actions during seizure",
    stem: "A nurse is caring for a 6-year-old who begins a generalized tonic-clonic seizure. Which nursing actions are appropriate? Select all that apply.",
    options: [
      "A. Turn the child to the lateral position",
      "B. Insert a padded tongue blade between the teeth to prevent tongue biting",
      "C. Time the seizure from onset",
      "D. Pad the side rails and clear the area of hard objects",
      "E. Restrain the arms gently to prevent injury from the jerking movements"
    ],
    correct: ["A", "C", "D"],
    rationale: "A: Lateral positioning prevents aspiration of secretions or vomitus. C: Timing determines if >5 minutes (status epilepticus), which triggers medication administration and 911. D: Padding rails and clearing the environment prevents traumatic injury from involuntary movements. B is WRONG: nothing should be placed in the mouth during a seizure — this can cause dental fracture, equipment aspiration, or provider injury. The tongue cannot be 'swallowed.' E is WRONG: restraining a seizing child can cause fractures and dislocations.",
    trap: "Students select the tongue blade (B) because they believe it prevents the child from 'swallowing the tongue' — this is a myth; nothing goes in the mouth during an active seizure."
  },
  {
    id: "m11_25",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Febrile seizure discharge teaching",
    stem: "A nurse is providing discharge teaching to the parents of a 2-year-old who had a first febrile seizure. Which statements should the nurse include? Select all that apply.",
    options: [
      "A. 'If a seizure occurs, lay your child on their side and do not put anything in their mouth'",
      "B. 'Giving acetaminophen at the first sign of fever will prevent future febrile seizures'",
      "C. 'Call 911 if a seizure lasts longer than 5 minutes'",
      "D. 'Febrile seizures do not cause brain damage or affect your child's intelligence'",
      "E. 'Your child should be started on a daily anticonvulsant medication to prevent recurrence'"
    ],
    correct: ["A", "C", "D"],
    rationale: "A: Lateral positioning and nothing in the mouth are the two most important parent instructions for seizure safety. C: >5 minutes = status epilepticus requiring emergency response — parents must know this threshold. D: Febrile seizures have no long-term effects on intelligence, behavior, or academic performance — a critical reassurance. B is WRONG: antipyretics do not prevent febrile seizure recurrence — this is the most common parental misconception; teaching it as truth is harmful. E is WRONG: prophylactic AEDs are not given between febrile seizures.",
    trap: "Students include option B (antipyretics prevent recurrence) because it seems like reasonable fever management advice — but this is the central teaching trap."
  },
  {
    id: "m11_26",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "VP shunt malfunction — reportable signs",
    stem: "A nurse is educating the parents of a 3-year-old with a ventriculoperitoneal shunt about signs of shunt malfunction. Which findings should the nurse instruct parents to report immediately? Select all that apply.",
    options: [
      "A. Sudden onset of severe headache",
      "B. Vomiting without fever or diarrhea",
      "C. Slight proportional increase in head circumference over 3 months on the growth chart",
      "D. Increasing irritability and difficulty waking the child",
      "E. Redness and warmth along the shunt tract"
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "A: Sudden severe headache is a hallmark of shunt obstruction with acute ICP rise — report immediately. B: Projectile vomiting without other illness signs is an ICP symptom — report. D: Change in LOC indicates significant ICP elevation — report. E: Redness and warmth along the shunt tract indicates infection — report. C is the exception: a gradual, proportional increase in head circumference over 3 months on the growth chart may represent normal growth. A SUDDEN crossing of percentile lines or change in rate is concerning — gradual proportional growth is not.",
    trap: "Students select C (gradual HC increase) because any head circumference change seems alarming in a VP shunt patient — gradual proportional growth is not the same as rapid crossing of percentile lines."
  },
  {
    id: "m11_27",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Bacterial meningitis nursing interventions",
    stem: "A nurse is caring for a 5-year-old admitted with bacterial meningitis. Which nursing interventions are appropriate? Select all that apply.",
    options: [
      "A. Maintain droplet precautions until 24 hours after appropriate antibiotic therapy",
      "B. Dim the room lighting and minimize noise to reduce photophobia and stimulation",
      "C. Encourage oral fluids to maintain hydration and promote CSF production",
      "D. Administer IV antibiotics as ordered, prioritizing prompt administration",
      "E. Administer dexamethasone before or concurrent with the first antibiotic dose as ordered"
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "A: N. meningitidis is transmitted by respiratory droplets — droplet precautions are maintained until 24 hours after effective antibiotics. B: Photophobia is a hallmark symptom; reducing light and noise decreases discomfort and stimulation-related ICP spikes. D: Prompt antibiotic administration is a time-sensitive priority. E: Dexamethasone given before or with the first antibiotic dose reduces inflammation and decreases hearing loss risk — timing is critical. C is WRONG: aggressive fluid administration in meningitis can worsen cerebral edema — IV fluids are carefully managed, not encouraged orally.",
    trap: "Students select C (encourage fluids) because hydration is typically supportive care — meningitis with elevated ICP requires careful fluid restriction, not encouragement."
  },
  {
    id: "m11_28",
    type: "Priority",
    chain_id: null,
    chain_scenario: null,
    concept: "Priority — fixed dilated pupil",
    stem: "A nurse is monitoring a 10-year-old in the PICU with severe TBI. The child's ICP has been trending at 16-18 mmHg for the past hour. The nurse reassesses and finds the right pupil is now fixed and dilated, the left pupil is briskly reactive. The child's GCS has dropped from 10 to 7. Which is the PRIORITY nursing action?",
    options: [
      "A. Administer IV mannitol as ordered for ICP >15 mmHg",
      "B. Reposition the head to midline and reassess pupils in 5 minutes",
      "C. Notify the provider immediately — this is a neurosurgical emergency",
      "D. Prepare for endotracheal intubation per GCS ≤8 protocol"
    ],
    correct: ["C"],
    rationale: "A fixed, dilated unilateral pupil with acute GCS decline indicates uncal herniation — the temporal lobe is herniating through the tentorium and compressing cranial nerve III. This requires IMMEDIATE provider notification for emergency intervention. While intubation will also be needed (GCS ≤8) and mannitol is appropriate, the first action is notification — a fixed dilated pupil is a code-level neuro emergency. Repositioning and reassessing (Option B) wastes critical time.",
    trap: "Students select intubation because GCS ≤8 is the intubation threshold — but a fixed dilated pupil is a herniation sign that requires the provider called first; intubation proceeds simultaneously with the team."
  },
  {
    id: "m11_29",
    type: "Priority",
    chain_id: null,
    chain_scenario: null,
    concept: "Priority — TBI 48 hours post-injury",
    stem: "A 6-year-old was admitted to the PICU 42 hours ago following a motor vehicle accident with head trauma. Initial GCS was 12. The nurse notes the child's GCS has decreased from 11 to 9 over the past 2 hours, blood pressure is rising, and the respiratory pattern is becoming irregular. Which is the PRIORITY nursing action?",
    options: [
      "A. Increase the rate of mannitol infusion without waiting for a provider order",
      "B. Document the findings and notify the provider at the next scheduled hour",
      "C. Notify the provider immediately — peak cerebral edema occurs at 24-72 hours post-TBI",
      "D. Administer IV corticosteroids to reduce traumatic cerebral edema"
    ],
    correct: ["C"],
    rationale: "Cerebral edema peaks at 24-72 hours post-TBI. This child is at 42 hours — exactly the highest-risk window. The triad of declining GCS, rising BP, and irregular respirations represents early Cushing's triad — herniation is imminent. Immediate provider notification is the priority. Option A is wrong — nurses cannot increase mannitol rate without an order. Option B is unacceptable — waiting when Cushing's triad is developing risks death. Option D is wrong — corticosteroids are contraindicated for traumatic cerebral edema.",
    trap: "Students select D (corticosteroids) because they know steroids reduce inflammation — the contraindication for corticosteroids in TBI is a critical exception that must be remembered."
  },
  {
    id: "m11_30",
    type: "Priority",
    chain_id: null,
    chain_scenario: null,
    concept: "Priority — septic shock meningitis treatment sequence",
    stem: "A 2-year-old arrives to the ED with a 6-hour history of high fever, irritability, and bulging fontanelle. The physician notes nuchal rigidity and a petechial rash. The team is preparing to perform a lumbar puncture. The child's BP suddenly drops to 68/40, HR 165, and the rash is rapidly spreading. Which is the PRIORITY nursing action?",
    options: [
      "A. Expedite the lumbar puncture so culture results can guide antibiotic selection",
      "B. Administer IV antibiotics immediately without waiting for the LP",
      "C. Obtain blood cultures from two sites before beginning any treatment",
      "D. Administer IV normal saline bolus to treat hypotension before antibiotics"
    ],
    correct: ["B"],
    rationale: "With a rapidly spreading purpuric rash and septic shock (hypotension + tachycardia), IV antibiotics must be administered IMMEDIATELY. A rapidly deteriorating patient cannot wait for LP — do not delay antibiotics for any diagnostic test when the child is in septic shock. Blood cultures CAN be drawn only if it does not delay antibiotics by even minutes — in this case, treatment takes absolute priority. Option D (fluids before antibiotics) is wrong when the cause of shock is bacterial infection — treat the source.",
    trap: "Students select the LP because 'culture before antibiotics' is a standard nursing principle — in septic shock from meningococcemia, antibiotics cannot be delayed for any diagnostic procedure."
  },
  {
    id: "m11_31",
    type: "CHAIN",
    chain_id: "m11_chain1",
    chain_scenario: "An 8-year-old is brought to the ED by parents after a bike accident in which he struck his head without a helmet. He had a brief loss of consciousness lasting about 1 minute, then appeared alert and said he was fine. In the ED, he is talking with parents and denies headache. Vital signs: HR 88, BP 108/64, RR 18, SpO2 98%.",
    concept: "Epidural hematoma — lucid interval interpretation",
    stem: "Based on this presentation, which statement best describes the nurse's clinical interpretation?",
    options: [
      "A. The child's return to full alertness indicates a mild concussion with low risk; discharge with return precautions",
      "B. The brief LOC followed by apparent normalization is consistent with a lucid interval and may indicate an epidural hematoma",
      "C. The normal vital signs confirm the child does not have increased ICP at this time",
      "D. Because the child denies headache, intracranial hemorrhage can be excluded"
    ],
    correct: ["B"],
    rationale: "The classic presentation of epidural hematoma is brief LOC at impact followed by a lucid interval during which the child appears normal, followed by rapid deterioration as arterial bleeding expands the hematoma. The child's apparent normality is the trap, not reassurance. Normal vitals and absent headache during the lucid interval are expected and do not rule out hemorrhage. This child requires CT imaging and observation — discharge during a lucid interval is a critical safety error.",
    trap: "Normal appearance + denied headache + stable vitals make discharge feel appropriate — the lucid interval is defined by looking fine before deteriorating."
  },
  {
    id: "m11_32",
    type: "CHAIN",
    chain_id: "m11_chain1",
    chain_scenario: "An 8-year-old is brought to the ED by parents after a bike accident in which he struck his head without a helmet. He had a brief loss of consciousness lasting about 1 minute, then appeared alert and said he was fine. In the ED, he is talking with parents and denies headache. Vital signs: HR 88, BP 108/64, RR 18, SpO2 98%.",
    concept: "Epidural hematoma — acute deterioration response",
    stem: "Two hours into observation, the child's condition changes: he complains of a sudden severe headache, becomes increasingly drowsy, and vomits once. His right pupil is 5 mm and sluggishly reactive; the left is 3 mm and brisk. GCS is now 11. Which interventions are the priority?",
    options: [
      "A. Administer oral ibuprofen for the headache and reassess in 30 minutes",
      "B. Notify the provider immediately, prepare for CT head, and anticipate neurosurgical intervention",
      "C. Perform a lumbar puncture to rule out bacterial meningitis as the cause of headache",
      "D. Elevate the head of bed to 90 degrees and administer IV mannitol per standing order"
    ],
    correct: ["B"],
    rationale: "The sudden severe headache, LOC decline, vomiting, and unequal pupils after a lucid interval confirm epidural hematoma with herniation in progress. This is a neurosurgical emergency requiring immediate CT and operative intervention. Notify the provider and prepare for CT/OR. LP is contraindicated with signs of herniation. HOB should be 15-30 degrees, not 90 degrees — sitting upright can worsen herniation. Ibuprofen for a child with herniation signs is dangerous.",
    trap: "Students select mannitol as the first intervention — but notification and CT/operative preparation must precede or occur simultaneously; mannitol alone does not stop an arterial bleed."
  },
  {
    id: "m11_33",
    type: "CHAIN",
    chain_id: "m11_chain1",
    chain_scenario: "An 8-year-old is brought to the ED by parents after a bike accident in which he struck his head without a helmet. He had a brief loss of consciousness lasting about 1 minute, then appeared alert and said he was fine. In the ED, he is talking with parents and denies headache. Vital signs: HR 88, BP 108/64, RR 18, SpO2 98%.",
    concept: "Post-operative ICP management — first intervention",
    stem: "The child undergoes emergency craniotomy for epidural hematoma. He is transferred to the PICU post-operatively and is intubated. The EVD reads 12 mmHg. The ICP begins to rise to 18 mmHg over the next 6 hours. Which intervention should the nurse perform first?",
    options: [
      "A. Administer IV dexamethasone to reduce post-operative cerebral edema",
      "B. Verify the head is in midline, the HOB is at 15-30 degrees, and minimize stimulation",
      "C. Begin a barbiturate coma infusion to reduce cerebral metabolic demand",
      "D. Increase the ventilator rate to cause hyperventilation and reduce PaCO2"
    ],
    correct: ["B"],
    rationale: "The first-line response to rising ICP post-operatively is to ensure positioning is optimal: HOB 15-30 degrees, head midline, minimize stimulation. These are the foundational non-pharmacologic interventions. Dexamethasone is contraindicated for traumatic/surgical cerebral edema. Barbiturate coma is a last resort used only after all other measures have failed. Hyperventilation can lower ICP acutely but causes cerebral vasoconstriction and ischemia — it is used only as a last resort bridge to surgery, not as a routine nursing intervention.",
    trap: "Students select hyperventilation because they know CO2 drives cerebral vasodilation — hyperventilation causes vasoconstriction which reduces ICP transiently but causes ischemia and is not a first-line nursing intervention."
  }
];

const M12_QUESTIONS = [
  {
    id: "m12_1",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Cleft lip post-op — no objects in mouth",
    stem: "A 3-month-old has undergone surgical repair of a cleft lip 12 hours ago. The infant is crying and the parents ask if they can offer a pacifier to calm the baby. Which response by the nurse is most appropriate?",
    options: [
      "A. 'Yes, a pacifier is safe as long as it does not touch the suture line'",
      "B. 'No, nothing should be placed in the mouth after cleft lip repair — offer comfort by holding and rocking'",
      "C. 'You may use a soft orthodontic pacifier that fits flat against the lip'",
      "D. 'Wait 24 hours after surgery, then pacifier use is safe'"
    ],
    correct: ["B"],
    rationale: "After cleft lip or palate repair, NO objects may be placed in the mouth — this includes pacifiers, straws, spoons, suction tips, thermometers, and tongue depressors. Any object in the mouth creates pressure and movement that can disrupt the suture line and compromise the repair. Parents should comfort the infant by holding, rocking, and swaddling. Options A, C, and D all describe scenarios where a pacifier is permitted — all are incorrect.",
    trap: "Parents instinctively reach for the pacifier to calm a crying infant; students fall into this trap because pacifier use seems harmless — the restriction is absolute post-operatively."
  },
  {
    id: "m12_2",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Cleft lip post-op — elbow immobilizers rationale",
    stem: "A nurse is caring for a 3-month-old post-cleft lip repair. The infant is wearing bilateral elbow immobilizers. A family member asks why these are necessary. Which explanation is most accurate?",
    options: [
      "A. The immobilizers prevent the infant from startling and bumping the head",
      "B. The immobilizers prevent the infant from touching or scratching the lip suture line",
      "C. The immobilizers are required for all post-surgical infants to prevent IV line displacement",
      "D. The immobilizers protect against contractures that develop after facial surgery"
    ],
    correct: ["B"],
    rationale: "Elbow immobilizers prevent the infant from bringing hands to the mouth or face, which could disrupt the sutured lip repair. Infants naturally bring hands to the face and mouth; the immobilizers interrupt this action. The nurse must assess skin integrity under the immobilizers every shift and allow passive ROM. They do not prevent startle, IV displacement, or contractures.",
    trap: "Students select IV line protection (C) because it sounds clinically reasonable for any post-op infant — but the immobilizers are specifically for protecting the facial repair."
  },
  {
    id: "m12_3",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Cleft lip and palate repair timing",
    stem: "The parents of a 2-week-old with both cleft lip and cleft palate ask when their child will have surgery. The nurse explains the expected repair schedule. Which response is accurate?",
    options: [
      "A. 'Cleft lip repair is performed first, usually around 2-3 months; cleft palate repair follows before 12 months to protect speech development'",
      "B. 'Both cleft lip and palate are repaired in one surgery at 6 months of age'",
      "C. 'Cleft palate is repaired first at 3-4 months since it causes more feeding difficulty'",
      "D. 'Cleft lip repair is delayed until 12 months; cleft palate is repaired at 18 months'"
    ],
    correct: ["A"],
    rationale: "Cleft lip is repaired first at 2-3 months. Cleft palate repair is performed before 12 months to allow normal speech development — the palate is essential for articulation, and repair before the child begins meaningful speech prevents long-term speech impairment. The two repairs are staged, not simultaneous. Options B, C, and D all describe incorrect timing.",
    trap: "Students reverse the order, thinking palate is repaired first because it causes the feeding difficulty — lip is repaired first; palate timing is driven by speech development."
  },
  {
    id: "m12_4",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Pyloric stenosis hallmark presentation",
    stem: "A parent brings a 5-week-old male infant to the pediatric clinic reporting that the baby vomits after every feeding. The parent describes the vomiting as forceful and 'shoots across the room.' The infant cries as if hungry immediately after vomiting. Physical exam reveals a small firm mass in the epigastric area. Which condition is most consistent with these findings?",
    options: [
      "A. Gastroesophageal reflux disease; the infant should be positioned upright after feeds",
      "B. Hypertrophic pyloric stenosis; the projectile nonbilious vomiting, olive-shaped mass, and persistent hunger are hallmarks",
      "C. Intussusception; the palpable abdominal mass confirms this diagnosis",
      "D. Hirschsprung disease; the vomiting indicates functional obstruction from aganglionic bowel"
    ],
    correct: ["B"],
    rationale: "Hypertrophic pyloric stenosis presents in males 2-8 weeks of age with projectile NONBILIOUS vomiting (obstruction is before the ampulla of Vater), an olive-shaped palpable epigastric mass, and an infant who remains hungry after vomiting. The hunger differentiates pyloric stenosis from other vomiting conditions where infants are disinterested. GERD causes spitting, not projectile vomiting, and produces no palpable mass. Intussusception presents with colicky pain and currant jelly stools. Hirschsprung presents with failure to pass meconium.",
    trap: "Students select GERD because it is common and vomiting post-feed fits — the key differentiators are projectile force, absence of bile, palpable olive mass, and persistent hunger."
  },
  {
    id: "m12_5",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Pyloric stenosis — acid-base and pre-op requirement",
    stem: "A 6-week-old male with suspected hypertrophic pyloric stenosis has been vomiting for 10 days. Blood gas results show: pH 7.52, PaCO2 46 mmHg, HCO3 36 mEq/L. Serum chloride is 88 mEq/L. The nurse interprets these results and anticipates which pre-operative intervention?",
    options: [
      "A. Administer IV sodium bicarbonate to correct the metabolic acidosis",
      "B. Correct the hypochloremic metabolic alkalosis with IV fluids and electrolyte replacement before surgery",
      "C. Proceed to surgery immediately; the acid-base imbalance will self-correct after pyloromyotomy",
      "D. Begin nasogastric tube feedings to restore nutritional status before surgery"
    ],
    correct: ["B"],
    rationale: "Repeated loss of gastric HCl causes hypochloremic metabolic alkalosis: high pH (7.52), elevated bicarbonate (36 mEq/L), low chloride (88 mEq/L). This metabolic state must be corrected BEFORE surgery — operating in the presence of significant alkalosis creates anesthesia risk (hypoventilation as respiratory compensation). Option A is wrong — sodium bicarbonate would worsen alkalosis. Option C is wrong — surgery is delayed until electrolytes are corrected; this may take 24-48 hours. NG feedings are not appropriate in a child with active gastric outlet obstruction.",
    trap: "Students see 'acid-base abnormality' and select bicarbonate — but bicarbonate corrects metabolic acidosis; this infant has alkalosis, and bicarbonate would be harmful."
  },
  {
    id: "m12_6",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Pyloric stenosis post-operative feeding",
    stem: "A 6-week-old undergoes laparoscopic pyloromyotomy for hypertrophic pyloric stenosis. The procedure was uncomplicated. Parents ask when they can feed their baby again. Which response is most accurate?",
    options: [
      "A. 'Feedings must wait 48-72 hours until bowel sounds return fully'",
      "B. 'Feedings typically begin 4-6 hours after surgery, starting with electrolyte solution, then advancing to breast milk or formula within 24 hours'",
      "C. 'No oral feedings for 24 hours; the infant will receive IV nutrition during this period'",
      "D. 'You may begin breastfeeding in the recovery room immediately after the infant is awake'"
    ],
    correct: ["B"],
    rationale: "Post-pyloromyotomy: electrolyte solution (Pedialyte) begins 4-6 hours after surgery, followed by advancement to breast milk or formula within 24 hours. The pyloric muscle has been divided — not the bowel — so return of bowel function is rapid. Post-operative vomiting is expected and common and does not indicate surgical failure. Waiting 48-72 hours (Option A) is too long and unnecessary. Immediate breastfeeding in recovery (Option D) begins too soon after anesthesia.",
    trap: "Students select waiting for bowel sounds (Option A) applying standard post-bowel-surgery logic — pyloromyotomy is a muscle incision, not a bowel anastomosis; feeding resumes much earlier."
  },
  {
    id: "m12_7",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Intussusception classic presentation",
    stem: "A 14-month-old is brought to the ED by parents who report sudden episodes of inconsolable crying. During each episode the infant draws the knees to the chest and screams; between episodes the infant appears lethargic and comfortable. The infant has had one bloody mucousy stool. Physical exam reveals an empty-feeling right lower quadrant. Which condition is most consistent with these findings?",
    options: [
      "A. Hirschsprung disease; the bloody stool indicates enterocolitis",
      "B. Intussusception; the episodic colicky pain, currant jelly stool, and Dance sign are characteristic",
      "C. Pyloric stenosis; the age and abdominal findings are typical",
      "D. Viral gastroenteritis; the episodic pain and stool change are common in infants after a viral illness"
    ],
    correct: ["B"],
    rationale: "Intussusception presents with the classic triad: (1) sudden episodic colicky abdominal pain with the infant drawing knees to chest during episodes and appearing comfortable between them, (2) currant jelly stools (blood + mucus from ischemic bowel — a late sign), and (3) Dance sign — emptiness in the RLQ because the ileum has telescoped into the cecum. This is the most common intestinal obstruction in children under 2. Hirschsprung presents in neonates with failure to pass meconium. Pyloric stenosis presents at 2-8 weeks with projectile vomiting.",
    trap: "Students select viral gastroenteritis because a bloody stool after viral illness fits a common scenario — the episodic pain with comfort between episodes and Dance sign distinguish intussusception."
  },
  {
    id: "m12_8",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Intussusception first-line treatment",
    stem: "An 18-month-old is diagnosed with intussusception at the ileocecal valve. The infant is hemodynamically stable with no signs of peritonitis. Which treatment should the nurse anticipate the provider ordering first?",
    options: [
      "A. Emergency laparotomy for surgical reduction",
      "B. Pneumoenema or ultrasound-guided saline enema as the first-line treatment",
      "C. IV antibiotics and NPO until bowel obstruction resolves spontaneously",
      "D. Immediate surgical resection of the ileocecal valve"
    ],
    correct: ["B"],
    rationale: "For a hemodynamically stable infant with intussusception and no signs of peritonitis or perforation, pneumoenema (air enema) or ultrasound-guided saline enema is the first-line treatment — it successfully reduces intussusception in 65-75% of cases. Surgery is reserved for failed enema reduction or perforation. Emergency laparotomy without attempting enema first (Option A) is not appropriate in a stable patient. IV antibiotics alone do not reduce a mechanical obstruction. Surgical resection of the ileocecal valve (Option D) is not the approach.",
    trap: "Students select surgical reduction because obstruction sounds surgical — enema reduction is first-line and succeeds in the majority of stable patients."
  },
  {
    id: "m12_9",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Hirschsprung neonatal hallmark",
    stem: "A nurse is performing a neonatal assessment on a 36-hour-old newborn. Chart review shows no documented stool passage since birth. The infant has a distended abdomen and is refusing feedings. Which finding most urgently requires provider notification?",
    options: [
      "A. The infant has not passed meconium within 48 hours of birth, which may indicate Hirschsprung disease",
      "B. The abdominal distension is expected in a breastfed infant at 36 hours",
      "C. Failure to pass meconium in the first 48 hours is normal and requires no intervention until 72 hours",
      "D. The feeding refusal is likely due to an immature suck reflex; encourage more frequent feeding attempts"
    ],
    correct: ["A"],
    rationale: "Failure to pass meconium within 24-48 hours of birth is the hallmark presenting sign of Hirschsprung disease in neonates. Combined with abdominal distension and feeding refusal, this triad requires immediate evaluation. The 48-hour threshold is the clinical decision point — waiting until 72 hours is incorrect and potentially dangerous. Abdominal distension is not normal in a breastfed newborn. Feeding refusal in a neonate with abdominal distension is an organic finding, not a feeding technique issue.",
    trap: "Students select waiting until 72 hours (Option C) because they learn 'full meconium passage can take up to 48 hours' — but no passage at all by 48 hours combined with distension requires immediate evaluation."
  },
  {
    id: "m12_10",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Hirschsprung definitive diagnosis",
    stem: "A 6-week-old is admitted for evaluation of chronic constipation since birth, abdominal distension, and failure to thrive. The team suspects Hirschsprung disease. The parents ask what test will confirm the diagnosis. Which response is most accurate?",
    options: [
      "A. 'An abdominal X-ray will show the absence of ganglion cells and confirm the diagnosis'",
      "B. 'A barium enema will show the transition zone and can confirm the diagnosis without further testing'",
      "C. 'A rectal biopsy showing absence of ganglion cells is the definitive diagnostic test'",
      "D. 'Ultrasound of the abdomen will show the aganglionic segment and confirm Hirschsprung disease'"
    ],
    correct: ["C"],
    rationale: "Rectal biopsy demonstrating absence of ganglion cells is the definitive diagnostic test for Hirschsprung disease. No other test can histologically confirm the absence of parasympathetic neurons. Abdominal X-ray shows dilation patterns but cannot identify ganglion cells. Barium enema shows the transition zone (suggestive of disease extent) but is NOT definitive — histology is required. Ultrasound cannot identify ganglion cells.",
    trap: "Students select barium enema because they know it shows the transition zone — but the transition zone localizes the disease; absence of ganglion cells on biopsy confirms it."
  },
  {
    id: "m12_11",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Hirschsprung enterocolitis",
    stem: "A 3-week-old with known Hirschsprung disease suddenly develops explosive watery diarrhea, fever of 39.1°C, and appears toxic. The abdomen is tense and markedly distended. Parents report the diaper changes have been 'nonstop liquid stools.' Which complication does the nurse suspect and which intervention is the highest priority?",
    options: [
      "A. Constipation from inadequate formula; switch to a lactose-free formula",
      "B. Hirschsprung-associated enterocolitis; notify provider immediately and prepare for IV antibiotics, fluid resuscitation, and bowel decompression",
      "C. Viral gastroenteritis; begin oral rehydration therapy and monitor",
      "D. Surgical suture line infection; obtain wound cultures"
    ],
    correct: ["B"],
    rationale: "Hirschsprung-associated enterocolitis is the most serious complication, occurring in approximately 20% of neonates within 2-4 weeks of birth. It presents with explosive watery diarrhea (paradoxical in a child with obstruction), fever, and a toxic appearance with tense distension. It can rapidly progress to toxic megacolon and bowel perforation. Treatment is IV antibiotics, fluid resuscitation, and bowel decompression — this is a life-threatening emergency.",
    trap: "Students select viral gastroenteritis because diarrhea + fever fits that picture — explosive watery diarrhea in a neonate with Hirschsprung disease combined with toxic appearance is enterocolitis until proven otherwise."
  },
  {
    id: "m12_12",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Hirschsprung — Down syndrome association",
    stem: "A nurse is reviewing the chart of a 2-day-old infant with Down syndrome who has not passed meconium since birth and has significant abdominal distension. The team is discussing differential diagnoses. Which statement by the nurse demonstrates the most accurate clinical knowledge?",
    options: [
      "A. 'Down syndrome is not associated with gastrointestinal conditions; this presentation is likely from maternal medications'",
      "B. 'Down syndrome is the most common syndrome associated with Hirschsprung disease; this infant requires immediate evaluation for aganglionic bowel'",
      "C. 'Infants with Down syndrome commonly have delayed meconium passage up to 72 hours; we can wait and reassess'",
      "D. 'The abdominal distension in Down syndrome is caused by hypotonia; it does not indicate a surgical condition'"
    ],
    correct: ["B"],
    rationale: "Down syndrome is the most common syndrome associated with Hirschsprung disease. Any infant with Down syndrome who fails to pass meconium within 24-48 hours requires urgent evaluation for Hirschsprung disease. Option A is incorrect — Down syndrome is associated with multiple GI conditions. Option C is dangerous — there is no extended meconium passage window for Down syndrome infants. Hypotonia causes abdominal laxity, not distension from obstruction.",
    trap: "Students select the hypotonia explanation (D) because Down syndrome hypotonia is well-known — hypotonia causes abdominal laxity and floppiness, not tensile distension from mechanical obstruction."
  },
  {
    id: "m12_13",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Cleft palate feeding technique",
    stem: "A nurse is teaching the parents of a 1-week-old with a cleft palate how to feed their infant. The infant cannot create adequate suction for a standard bottle. Which feeding instruction is most appropriate?",
    options: [
      "A. 'Breastfeeding is contraindicated with cleft palate; introduce a standard bottle with nipple immediately'",
      "B. 'Use a specialized cleft palate feeder such as a Pigeon bottle or Mead-Johnson Nurser, pause frequently, and burp the infant often due to increased air swallowing'",
      "C. 'Position the infant supine during feeding to reduce the risk of milk entering the nasal cavity'",
      "D. 'Begin nasogastric tube feedings until the palate is surgically repaired at 2-3 months'"
    ],
    correct: ["B"],
    rationale: "Infants with cleft palate cannot generate sufficient suction for standard feeding. Specialized feeders (Pigeon bottle, Mead-Johnson Cleft Palate Nurser) deliver milk with minimal suction required. Frequent pauses and burping are necessary because these infants swallow more air. Breastfeeding is not absolutely contraindicated but requires modification. Supine positioning (Option C) increases aspiration risk. NG tube feeding is not indicated as the primary approach — specialized oral feeders allow oral feeding in most cases.",
    trap: "Students select NG tube feeding (Option D) because the infant 'can't feed normally' — NG feeding is a last resort; specialized oral feeders are the first-line approach."
  },
  {
    id: "m12_14",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Intussusception — currant jelly stools as late sign",
    stem: "A parent brings a 20-month-old to the ED reporting 4 hours of episodic abdominal pain. The child screams and draws up the legs every 15-20 minutes, then appears completely normal between episodes. There has been no change in stool. The abdominal exam reveals mild tenderness in the right upper quadrant. The nurse suspects intussusception. The parent asks 'Shouldn't there be bloody stools if that's what it is?' Which response is most accurate?",
    options: [
      "A. 'The absence of bloody stools rules out intussusception; we will evaluate for another cause'",
      "B. 'Currant jelly stools are a late finding in intussusception; the characteristic episodic pain pattern is an earlier presentation and warrants immediate evaluation'",
      "C. 'Bloody stools must be present for the diagnosis; the physician will wait for stools to change before ordering imaging'",
      "D. 'Bloody stools only appear in Hirschsprung disease; this patient likely has pyloric stenosis'"
    ],
    correct: ["B"],
    rationale: "Currant jelly stools are a LATE sign of intussusception, present in fewer than 30% of cases at initial presentation. The episodic colicky pain with the infant drawing knees to chest and appearing comfortable between episodes is the EARLIER presentation. Waiting for bloody stools before evaluating means waiting until bowel ischemia has progressed significantly. The clinical pattern of episodic pain alone warrants ultrasound evaluation.",
    trap: "Students and parents expect the textbook triad to be present simultaneously — currant jelly stools are LATE; the episodic pain is what comes first and what should trigger evaluation."
  },
  {
    id: "m12_15",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Hirschsprung post-op abdominal monitoring",
    stem: "A 4-week-old has undergone surgical pull-through procedure for Hirschsprung disease. The nurse is performing post-operative assessments. Which monitoring parameter is most specific to detecting post-operative complications from this surgery?",
    options: [
      "A. Daily weight measurement to detect fluid retention",
      "B. Frequent measurement of abdominal circumference at the widest point",
      "C. Daily urine specific gravity to detect dehydration",
      "D. Blood glucose monitoring every 4 hours for hypoglycemia"
    ],
    correct: ["B"],
    rationale: "Serial abdominal circumference measurements are the most specific post-operative monitoring tool after Hirschsprung pull-through surgery. Increasing abdominal circumference indicates distension from obstruction, anastomotic stricture, or enterocolitis recurrence. The measurement is taken at the widest part of the abdomen and trended over time. Daily weight detects overall fluid balance but cannot localize abdominal distension. Urine specific gravity and glucose monitoring are general post-operative parameters, not specific to this surgery's complications.",
    trap: "Students select daily weight because it is a standard post-operative vital — abdominal circumference is the most specific to detecting GI complications after Hirschsprung repair."
  },
  {
    id: "m12_16",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Discriminating three GI conditions by presentation",
    stem: "An ER nurse is triaging three vomiting infants. Infant A is 7 weeks old, male, with forceful nonbilious vomiting; remains hungry after vomiting; palpable epigastric mass. Infant B is 10 months old with episodic crying, drawing knees to chest, and one bloody stool. Infant C is a 2-day-old who has not passed stool and has bilious vomiting with abdominal distension. Which triage interpretation is correct?",
    options: [
      "A. All three likely have gastroenteritis and require oral rehydration",
      "B. Infant A likely has pyloric stenosis; Infant B likely has intussusception; Infant C likely has Hirschsprung disease",
      "C. Infant A needs antibiotics for bacterial gastroenteritis; Infants B and C need surgical consultation only",
      "D. Infant C is the only surgical emergency; Infants A and B can be managed with dietary modification"
    ],
    correct: ["B"],
    rationale: "Each infant presents the signature discriminating features of their condition. Infant A: 7-week-old male, projectile nonbilious vomiting, persistent hunger, olive mass = pyloric stenosis. Infant B: 10-month-old, episodic colicky pain drawing knees to chest, bloody stool = intussusception. Infant C: 2-day-old, failure to pass stool, bilious vomiting, distension = Hirschsprung disease. All three require urgent evaluation and are potentially surgical. Option A misses all three diagnoses.",
    trap: "Students get confused when all three vomiting infants are presented simultaneously — each condition has a unique discriminating signature (vomiting character, age, associated findings) that must be matched correctly."
  },
  {
    id: "m12_17",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Cleft lip post-op suture site care",
    stem: "A nurse is discharging a 3-month-old following cleft lip repair. The parents ask how to care for the incision at home. Which instruction is most important to include?",
    options: [
      "A. 'Cover the suture line with a dry gauze bandage and change it twice daily'",
      "B. 'Clean the suture site frequently to prevent crust formation, which impedes wound healing; petroleum jelly may be applied to the lip incision'",
      "C. 'Avoid any contact with the suture line for 2 weeks to allow undisturbed healing'",
      "D. 'Apply topical antibiotic ointment and keep the site moist under plastic wrap'"
    ],
    correct: ["B"],
    rationale: "The suture site after cleft lip repair must be cleaned frequently to prevent crust (dried blood and secretions) from forming. Crusting impedes wound healing and increases infection risk. Petroleum jelly applied to the lip incision softens the site and prevents excessive crusting. Dry gauze bandaging (Option A) would adhere to the wound. Avoiding all contact (Option C) allows crust to build up — active cleaning is required. Plastic wrap is not an appropriate wound care method for a facial incision.",
    trap: "Students select avoiding contact (Option C) because they think 'leave it alone' protects the healing wound — active cleaning to prevent crusting is the correct approach."
  },
  {
    id: "m12_18",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Pediatric pre-op anxiety — toddler age-based",
    stem: "A nurse is preparing a 3-year-old for an inguinal hernia repair. The child cries as soon as the parents leave the room to speak with the anesthesiologist. Which intervention best addresses the developmental source of this child's anxiety?",
    options: [
      "A. Explain the procedure in detail so the child understands what will happen",
      "B. Keep a parent or familiar caregiver present as much as possible; use distraction with familiar toys",
      "C. Encourage the child to interact with the nursing staff to build trust before the procedure",
      "D. Administer pre-operative sedation immediately to prevent anxiety from escalating"
    ],
    correct: ["B"],
    rationale: "Toddlers and preschoolers (ages 1-5) experience separation anxiety as the primary source of surgical fear. Parental presence and familiarity — keeping a parent with the child as long as possible, using familiar toys, and distraction — address the core anxiety. Detailed explanations (Option A) are developmentally inappropriate for a 3-year-old and increase anxiety. Encouraging interaction with unfamiliar staff (Option C) does not address separation anxiety. Immediate sedation (Option D) is not indicated for expected developmental behavior.",
    trap: "Students select detailed explanation (Option A) because preparation is a standard pre-op intervention — verbal explanations are developmentally appropriate for school-age children, not toddlers."
  },
  {
    id: "m12_19",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Pyloric stenosis — NG tube purpose",
    stem: "A 5-week-old with hypertrophic pyloric stenosis is being stabilized before pyloromyotomy. A nasogastric tube is placed to low intermittent suction. The parents ask why the tube is needed. Which explanation is most accurate?",
    options: [
      "A. 'The tube delivers nutrients directly to the stomach until surgery'",
      "B. 'The tube decompresses the stomach, reducing vomiting and aspiration risk while the metabolic imbalance is corrected'",
      "C. 'The tube measures gastric output to determine the severity of fluid losses'",
      "D. 'The tube allows us to administer oral medications safely despite the obstruction'"
    ],
    correct: ["B"],
    rationale: "In pyloric stenosis, the NG tube is placed for gastric decompression. The pyloric obstruction causes gastric dilation and ongoing vomiting — decompression removes gastric contents, reduces vomiting, minimizes aspiration risk, and helps stabilize the infant while metabolic alkalosis is corrected. The tube is NOT for feeding (the obstruction blocks passage anyway) and is not primarily for measuring output or administering medications.",
    trap: "Students select measuring output (Option C) because it sounds clinical — gastric decompression to prevent aspiration and reduce vomiting is the primary goal."
  },
  {
    id: "m12_20",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Intussusception recurrence teaching",
    stem: "An 18-month-old successfully had intussusception reduced with pneumoenema. The nurse is providing discharge teaching. Which statement should be included?",
    options: [
      "A. 'Intussusception never recurs after successful enema reduction'",
      "B. 'Intussusception may recur after enema treatment; return to the ED immediately if the episodic pain and drawing-up-the-legs behavior returns'",
      "C. 'Because the enema was successful, your child will not need any follow-up care'",
      "D. 'Surgery is always required within 2 weeks after enema reduction to prevent recurrence'"
    ],
    correct: ["B"],
    rationale: "Intussusception may recur after successful enema reduction. Parents must be taught to recognize the signs (episodic colicky pain with the child drawing knees to chest, comfortable between episodes) and return to the ED immediately if they recur. Option A is incorrect — recurrence does occur. Option C is dangerous — follow-up is important and signs of recurrence must be watched for. Surgery is not routinely performed after successful enema unless reduction fails or recurrence is repeated.",
    trap: "Students select Option A because successful treatment implies cure — recurrence after enema reduction is a real and taught risk in intussusception."
  },
  {
    id: "m12_21",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Pyloric stenosis vs Hirschsprung diagnostic test discrimination",
    stem: "A nurse is reviewing two charts. Patient 1 is a 6-week-old male with projectile vomiting after every feeding, no stool abnormalities reported, and an olive-shaped mass palpated in the epigastrium. Patient 2 is a 1-month-old with no meconium passed since birth, bilious vomiting, and abdominal distension. Which statement correctly discriminates these two conditions?",
    options: [
      "A. Both conditions are treated with the same surgical approach — pyloromyotomy",
      "B. Patient 1 likely has pyloric stenosis (nonbilious vomiting, olive mass); Patient 2 likely has Hirschsprung disease (failure to pass meconium, bilious vomiting, distension) — different pathophysiology, different surgical treatments",
      "C. Both present in the first week of life and are considered congenital malformations",
      "D. Patient 2 would be confirmed with ultrasound; Patient 1 requires rectal biopsy"
    ],
    correct: ["B"],
    rationale: "Pyloric stenosis: develops at weeks 2-8 (not congenital), projectile NONBILIOUS vomiting, olive mass, treated with pyloromyotomy. Hirschsprung disease: congenital absence of ganglion cells, presents in neonates with failure to pass meconium, bilious vomiting, abdominal distension, confirmed by rectal biopsy, treated with surgical resection of aganglionic segment. Option D reverses the diagnostics: pyloric stenosis = ultrasound; Hirschsprung = rectal biopsy.",
    trap: "Students reverse the diagnostic tests (Option D), knowing ultrasound and rectal biopsy are involved but assigning them to the wrong condition."
  },
  {
    id: "m12_22",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Post-op reorder maintenance medications",
    stem: "A 5-year-old with a known seizure disorder is recovering from a surgical repair of a bowel obstruction. The anesthesiologist has cleared the child to resume normal diet and medications. The post-operative orders do not include the child's home levetiracetam. Which action by the nurse is most appropriate?",
    options: [
      "A. Wait for the child to seize before escalating — the medication can be ordered emergently at that time",
      "B. Contact the provider to reorder the levetiracetam; maintenance seizure medications must be continued post-operatively",
      "C. Substitute benzodiazepines for the missed dose since the child is in the hospital",
      "D. Hold all seizure medications until the surgical wound is fully healed"
    ],
    correct: ["B"],
    rationale: "Maintenance seizure medications (and cardiac medications) must be specifically reordered in the post-operative period — they do not automatically carry over from the pre-operative medication list. The nurse must identify omitted maintenance medications and contact the provider for reorders. Waiting for a seizure to occur (Option A) is negligent. Benzodiazepines (Option C) are for acute seizures, not chronic epilepsy maintenance. Holding seizure medications post-operatively (Option D) dramatically increases seizure risk.",
    trap: "Students assume medications continue automatically post-operatively — a critical nursing responsibility is to identify and reconcile maintenance medications that require reorders."
  },
  {
    id: "m12_23",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Post-op cleft palate nursing care",
    stem: "A nurse is caring for a 10-month-old on post-operative day 1 following cleft palate repair. Which nursing actions are appropriate? Select all that apply.",
    options: [
      "A. Assess skin integrity under elbow immobilizers every shift",
      "B. Offer a soft-tipped pacifier to calm the infant",
      "C. Clean the suture site frequently to prevent crust formation",
      "D. Position the infant upright or in an infant seat to manage secretions",
      "E. Use a bulb suction device to suction the mouth if secretions accumulate"
    ],
    correct: ["A", "C", "D"],
    rationale: "A: Elbow immobilizers prevent hand-to-mouth contact but must be monitored for skin breakdown and hand circulation every shift. C: Suture site cleaning to prevent crust formation is a core post-operative nursing action. D: Upright positioning facilitates drainage of oral secretions and reduces swelling. B is WRONG: pacifiers are absolutely contraindicated after cleft palate repair — no objects in the mouth. E is WRONG: bulb suctioning inserts a device into the mouth and can disrupt the suture line — explicitly contraindicated.",
    trap: "Students select bulb suctioning (E) because they know airway secretion management is important — but inserting any device into the mouth post-palate repair is explicitly contraindicated."
  },
  {
    id: "m12_24",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Pyloric stenosis pre-operative nursing interventions",
    stem: "A nurse is caring for a 7-week-old with confirmed hypertrophic pyloric stenosis awaiting pyloromyotomy. Which nursing interventions are appropriate pre-operatively? Select all that apply.",
    options: [
      "A. Place a nasogastric tube for gastric decompression",
      "B. Administer IV fluid resuscitation and electrolyte replacement to correct metabolic alkalosis",
      "C. Begin oral feeding with a thickened formula to reduce vomiting",
      "D. Monitor urine output and assess for signs of dehydration",
      "E. Prepare the family for the expectation that some post-operative vomiting is normal and expected"
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "A: NG tube for gastric decompression is standard pre-operative management — prevents vomiting and aspiration. B: Correcting the hypochloremic metabolic alkalosis with IV fluids and electrolytes is mandatory before surgery. D: Monitoring urine output assesses dehydration status and response to IV rehydration. E: Post-operative vomiting after pyloromyotomy is common and expected — family teaching prevents unnecessary alarm. C is WRONG: oral feeding is contraindicated with an active gastric outlet obstruction — feeding will be vomited and increases aspiration risk.",
    trap: "Students select thickened formula (C) because thickened feeds are used for GERD — pyloric stenosis is a mechanical obstruction; thickening feeds does nothing and increases aspiration risk."
  },
  {
    id: "m12_25",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Intussusception post-enema nursing care",
    stem: "A 15-month-old has just undergone successful pneumoenema reduction of intussusception. Which post-procedure nursing actions are appropriate? Select all that apply.",
    options: [
      "A. Monitor vital signs frequently for signs of perforation (fever, tachycardia, abdominal rigidity)",
      "B. Begin clear liquids and advance diet as tolerated once bowel sounds are confirmed",
      "C. Discharge the child immediately since the reduction was successful",
      "D. Monitor for the first post-procedure stool",
      "E. Educate parents that recurrence is possible and to return if episodic pain recurs"
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "A: Monitoring for peritonitis signs is essential — pneumoenema can cause perforation; ongoing monitoring is required. B: Advancing diet after bowel sounds confirm return of peristalsis is appropriate post-reduction management. D: The first stool confirms the bowel is patent and functioning. E: Recurrence education is mandatory discharge teaching. C is WRONG: the child is not discharged immediately after enema reduction — a period of observation for signs of perforation or recurrence is required.",
    trap: "Students select immediate discharge (C) because the reduction was 'successful' — post-enema observation is required because perforation and recurrence can both occur in the immediate post-procedure period."
  },
  {
    id: "m12_26",
    type: "SATA",
    chain_id: null,
    chain_scenario: null,
    concept: "Hirschsprung enterocolitis warning signs",
    stem: "A nurse is teaching a nursing student about warning signs of Hirschsprung-associated enterocolitis in a 2-week-old post-pull-through surgery. Which findings should be reported immediately? Select all that apply.",
    options: [
      "A. Explosive, watery diarrhea",
      "B. Fever above 38.5°C",
      "C. Passage of one soft yellow stool — first post-operative stool",
      "D. Increasing abdominal distension",
      "E. Sudden onset of inconsolable irritability"
    ],
    correct: ["A", "B", "D", "E"],
    rationale: "A: Explosive watery diarrhea is the hallmark of enterocolitis — paradoxical in a constipation disease but represents bacterial overgrowth and bowel wall breakdown. B: Fever indicates systemic infection/sepsis from bowel translocation of bacteria. D: Increasing abdominal distension signals impending toxic megacolon or anastomotic failure — measure circumference and report. E: Sudden inconsolable irritability in a neonate indicates pain from distension or ischemia. C is WRONG: the first soft post-operative stool is a positive sign indicating the pull-through is functioning — this is the goal and should be documented as a good finding.",
    trap: "Students select passage of the first stool (C) because any stool change post-bowel surgery sounds concerning — the first normal stool post-pull-through is the goal and indicates success."
  },
  {
    id: "m12_27",
    type: "Priority",
    chain_id: null,
    chain_scenario: null,
    concept: "Priority — cleft palate post-op airway",
    stem: "A nurse is recovering a 10-month-old from cleft palate repair. The infant is in the PACU, beginning to wake from anesthesia. The infant is crying vigorously, SpO2 is 93%, and there are audible gurgling sounds. The elbow immobilizers are in place. Which is the PRIORITY nursing action?",
    options: [
      "A. Insert a bulb syringe into the mouth to remove secretions",
      "B. Reposition the infant to the lateral position to facilitate drainage and assess airway patency without inserting anything in the mouth",
      "C. Apply a pacifier to calm the infant and reduce oxygen demand",
      "D. Increase the supplemental oxygen flow rate and document findings"
    ],
    correct: ["B"],
    rationale: "Post-palate repair, airway management must respect the prohibition on inserting objects into the mouth. The safe intervention is repositioning to the lateral position, allowing secretions to drain by gravity — the gurgling indicates secretion pooling, and lateral positioning clears the airway without touching the suture line. Bulb syringe (Option A) requires insertion into the mouth — explicitly contraindicated. Pacifier (Option C) is contraindicated. Increasing O2 (Option D) addresses SpO2 but does not clear the airway obstruction.",
    trap: "Students select bulb suctioning because SpO2 of 93% with gurgling sounds demands airway clearance — the method of clearance must avoid inserting anything in the mouth; lateral positioning is the correct approach."
  },
  {
    id: "m12_28",
    type: "Priority",
    chain_id: null,
    chain_scenario: null,
    concept: "Priority — pyloric stenosis unsafe for surgery",
    stem: "A 6-week-old with hypertrophic pyloric stenosis has been admitted. The infant has a blood pressure of 86/50, HR 174, and urine output of 0.4 mL/kg/hr over the past 4 hours. Blood gas shows pH 7.54, bicarbonate 32 mEq/L. The surgeon has cleared the infant for pyloromyotomy. Which is the PRIORITY nursing action?",
    options: [
      "A. Transport the infant to the operating room immediately for pyloromyotomy",
      "B. Notify the provider that the infant is not safe for surgery — metabolic alkalosis and dehydration must be corrected first",
      "C. Place a feeding tube and begin elemental formula to improve nutritional status before surgery",
      "D. Administer IV normal saline at a maintenance rate and proceed to surgery in 1 hour"
    ],
    correct: ["B"],
    rationale: "Pyloric stenosis surgery cannot proceed safely until the metabolic alkalosis and dehydration are corrected. The infant has pH 7.54 (alkalotic), elevated bicarbonate, tachycardia, hypotension, and critically low urine output — indicating significant dehydration and electrolyte imbalance. Anesthesia in the presence of metabolic alkalosis causes dangerous hypoventilation (lungs retain CO2 to compensate). This requires hours of IV fluid and electrolyte correction — not 1 hour of maintenance rate. The nurse must advocate for the infant by notifying the provider of unsafe surgical status.",
    trap: "Students select immediate surgery (Option A) because the surgeon cleared it — but the nurse must recognize when a patient is physiologically unsafe for surgery and advocate for correction first."
  },
  {
    id: "m12_29",
    type: "Priority",
    chain_id: null,
    chain_scenario: null,
    concept: "Priority — post-op Hirschsprung enterocolitis recognition",
    stem: "A nurse is making rounds on a 3-week-old on post-operative day 3 after Hirschsprung pull-through surgery. The abdominal circumference has increased 3 cm from the previous shift, the infant has had explosive watery stools, and the temperature is 38.9°C. The infant is inconsolable. Which is the PRIORITY nursing action?",
    options: [
      "A. Increase the frequency of abdominal circumference measurements to every 2 hours",
      "B. Notify the provider immediately — this presentation indicates enterocolitis, a life-threatening complication",
      "C. Document the findings and report to the provider at the next scheduled update",
      "D. Administer an oral rehydration solution to treat the diarrhea-related fluid loss"
    ],
    correct: ["B"],
    rationale: "This infant has the full presentation of Hirschsprung-associated enterocolitis: explosive watery diarrhea + fever + increasing abdominal distension + inconsolability. This is the most serious complication of Hirschsprung disease and can progress to septic shock and bowel perforation within hours. Immediate provider notification is the priority for IV antibiotics, fluid resuscitation, and bowel decompression. Increasing measurement frequency (Option A) collects more data but delays treatment. Waiting for the next scheduled update (Option C) is unacceptable. Oral rehydration (Option D) is insufficient and inappropriate when IV management is required.",
    trap: "Students select increasing measurement frequency (Option A) because they were just taught to monitor abdominal circumference — recognizing when monitoring results require immediate action is the clinical judgment skill."
  },
  {
    id: "m12_30",
    type: "CHAIN",
    chain_id: "m12_chain1",
    chain_scenario: "A 2-day-old newborn born at 38 weeks gestation has not passed any meconium since birth. The infant has a distended, firm abdomen, is refusing to feed, and had one episode of bilious vomiting. The infant appears uncomfortable. Physical exam reveals decreased bowel sounds and no stool is palpable on rectal exam. The mother notes the infant has the features of Down syndrome.",
    concept: "Hirschsprung — initial recognition",
    stem: "The nurse reviews the infant's presentation. Which statement reflects the most accurate clinical interpretation?",
    options: [
      "A. This is a normal breastfed newborn who has not yet established a feeding and stooling pattern",
      "B. The combination of Down syndrome, failure to pass meconium, bilious vomiting, and abdominal distension is highly suspicious for Hirschsprung disease and requires immediate evaluation",
      "C. Bilious vomiting in a newborn is normal and indicates an immature esophageal sphincter",
      "D. The abdominal distension is caused by gas from air swallowing and will resolve without intervention"
    ],
    correct: ["B"],
    rationale: "Down syndrome is the most common associated syndrome with Hirschsprung disease. This infant presents with the neonatal hallmark triad: failure to pass meconium within 24-48 hours + bilious vomiting + abdominal distension. Bilious vomiting in a newborn is NEVER normal — it indicates obstruction below the ampulla of Vater. Combined with Down syndrome, this demands immediate evaluation. Dismissing these findings as normal (Options A, C, D) delays diagnosis of a potentially fatal surgical condition.",
    trap: "Students select option A (not yet established pattern) because the newborn is only 2 days old — failure to pass meconium at 48 hours combined with bilious vomiting is never normal."
  },
  {
    id: "m12_31",
    type: "CHAIN",
    chain_id: "m12_chain1",
    chain_scenario: "A 2-day-old newborn born at 38 weeks gestation has not passed any meconium since birth. The infant has a distended, firm abdomen, is refusing to feed, and had one episode of bilious vomiting. The infant appears uncomfortable. Physical exam reveals decreased bowel sounds and no stool is palpable on rectal exam. The mother notes the infant has the features of Down syndrome.",
    concept: "Hirschsprung — definitive diagnostic test",
    stem: "The physician orders a diagnostic workup for suspected Hirschsprung disease. The parents ask the nurse which test will confirm the diagnosis. Which response is most accurate?",
    options: [
      "A. 'An abdominal X-ray will confirm the diagnosis by showing the aganglionic segment'",
      "B. 'A barium enema will confirm the diagnosis by showing absent peristalsis in the affected segment'",
      "C. 'A rectal biopsy will be performed to look for the absence of ganglion cells — this is the definitive diagnostic test'",
      "D. 'A stool culture will confirm the bacterial cause of the obstruction'"
    ],
    correct: ["C"],
    rationale: "Rectal biopsy demonstrating absence of ganglion cells is the definitive diagnostic test for Hirschsprung disease. No other test can histologically confirm the absence of parasympathetic neurons. Abdominal X-ray shows dilation patterns and obstruction but cannot identify ganglion cells. Barium enema identifies the transition zone and helps map the extent of disease, but it is not definitive — histology is required. Stool culture has no role in diagnosing a congenital anatomical malformation.",
    trap: "Students select barium enema because they know it shows the transition zone — but the transition zone localizes the disease; absence of ganglion cells on biopsy confirms it."
  },
  {
    id: "m12_32",
    type: "CHAIN",
    chain_id: "m12_chain1",
    chain_scenario: "A 2-day-old newborn born at 38 weeks gestation has not passed any meconium since birth. The infant has a distended, firm abdomen, is refusing to feed, and had one episode of bilious vomiting. The infant appears uncomfortable. Physical exam reveals decreased bowel sounds and no stool is palpable on rectal exam. The mother notes the infant has the features of Down syndrome.",
    concept: "Hirschsprung post-op — enterocolitis recognition",
    stem: "The infant undergoes successful pull-through surgery for Hirschsprung disease. On post-operative day 2, the nurse is assessing the infant. Which assessment finding requires IMMEDIATE provider notification?",
    options: [
      "A. The infant has not yet passed a stool since surgery",
      "B. The abdominal circumference has increased 4 cm from the last measurement, and the infant has explosive watery diarrhea with a temperature of 39°C",
      "C. The surgical wound site has a small amount of serosanguinous drainage",
      "D. The infant requires 0.5 L/min nasal cannula oxygen, which was expected per the anesthesiologist's post-op orders"
    ],
    correct: ["B"],
    rationale: "Increasing abdominal circumference (+4 cm) + explosive watery diarrhea + fever of 39°C on post-operative day 2 is the triad of enterocolitis — the most serious complication of Hirschsprung disease, with risk of toxic megacolon and sepsis. This requires immediate provider notification for IV antibiotics, fluid resuscitation, and bowel decompression. No stool at day 2 (Option A) may be expected early post-operatively and is not immediately alarming. Small serosanguinous wound drainage (Option C) is a normal early post-operative finding. Expected supplemental O2 ordered by anesthesia (Option D) is a planned continuation.",
    trap: "Students select no stool at day 2 (Option A) because stool passage is a post-surgical goal — the absence of one expected finding is less urgent than the triad signaling a potentially fatal complication."
  },
  {
    id: "m12_33",
    type: "MCQ",
    chain_id: null,
    chain_scenario: null,
    concept: "Cleft lip racial prevalence",
    stem: "A nursing student studying cleft lip and palate epidemiology asks which racial group has the highest incidence. Which response is accurate?",
    options: [
      "A. African American infants have the highest incidence at 1 in 300 births",
      "B. Asian infants have the highest incidence at 1 in 300 births",
      "C. Native American infants have the highest incidence at approximately 1 in 300 births",
      "D. Caucasian infants have the highest incidence because they represent the majority of the population"
    ],
    correct: ["C"],
    rationale: "Native American infants have the highest incidence of cleft lip and palate at approximately 1 in 300 births. The prevalence by group: Native American 1:300 (highest), Asian 1:500, Caucasian 1:750, African American 1:2,500 (lowest). The overall incidence is approximately 1 in 800 births. Option A incorrectly assigns highest prevalence to African Americans, who actually have the lowest rate. Option D confuses population size with incidence rate — a large population does not mean higher disease rate per births.",
    trap: "Students select Caucasian (Option D) because they think of it as the most common demographic — population size does not determine incidence rate."
  }
]

const QUESTIONS = {
  M7:  M7_QUESTIONS,
  M8:  M8_QUESTIONS,
  M9:  M9_QUESTIONS,
  M10: M10_QUESTIONS,
  M11: M11_QUESTIONS,
  M12: M12_QUESTIONS,
};
