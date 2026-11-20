const QUESTIONS = {
  M7: [
    {
      id:"m7_1",concept:"ORT vs IVF — RAPID decision",
      stem:"A 14-month-old presents with 2 days of diarrhea and vomiting. HR 148, BP 88/56, cap refill 3 sec, lethargic, no tears, sunken fontanelle. The parent asks if the child can drink Pedialyte at home. What is the nurse's priority response?",
      options:["A. Agree — moderate dehydration can be treated with ORT 100 mL/kg over 4–6 hours","B. Decline — the child needs IV NS 20 mL/kg bolus over 5–10 minutes due to hypotension","C. Decline — ORT is contraindicated in children under 2 years of age","D. Agree — start ORT but limit to 5 mL every 5 minutes due to vomiting history"],
      correct:["B"],
      rationale:"Hypotension makes this RAPID positive — the child is hemodynamically unstable and requires immediate IV fluid resuscitation at 20 mL/kg NS over 5–10 minutes (not 5–20 min; that slower rate applies only to RAPID-negative patients). ORT is contraindicated in severe dehydration, hypotension, and altered LOC. Answer A applies the right ORT volume but misses the hypotension. Answer C is false — ORT is appropriate for mild-moderate dehydration in all ages.",
      trap:"The lethargy and sunken fontanelle are dramatic, but the determining factor for IV vs ORT timing is blood pressure — not mental status alone."
    },
    {
      id:"m7_2",concept:"Dehydration type by sodium",
      stem:"A 7-month-old with acute gastroenteritis has serum sodium of 158 mEq/L. The infant is irritable, has a high-pitched cry, and the skin feels doughy despite visible dehydration. Which statement by the nurse correctly explains the pathophysiology to the parent?",
      options:["A. 'The low sodium is causing fluid to move into your baby's cells, making them swell'","B. 'The high sodium is pulling fluid out of your baby's cells, which shrinks them — including brain cells'","C. 'The sodium level confirms this is isotonic dehydration, the most common type'","D. 'The doughy skin means your baby is well-hydrated — the sodium must be a lab error'"],
      correct:["B"],
      rationale:"Sodium 158 = hypertonic (hypernatremic) dehydration. High serum sodium makes ECF hyperosmolar, pulling fluid OUT of cells — cells shrink, including brain cells. This explains neurologic irritability and the high-pitched cry. The doughy skin is a deceptive hallmark of hypernatremic dehydration — cells lose fluid and become firm. This is the most dangerous type for neurologic damage. Answer A describes hyponatremia (hypotonic). Isotonic has normal sodium (130–150).",
      trap:"Doughy or normal-feeling skin in a visibly dehydrated infant is the classic exam trap — it signals hypernatremic dehydration, not adequate hydration."
    },
    {
      id:"m7_3",concept:"Holliday-Segar maintenance calculation",
      stem:"A nurse is calculating maintenance IV fluid rate for a 24 kg child. Using the Holliday-Segar method, what is the correct hourly rate?",
      options:["A. 24 mL/hr","B. 44 mL/hr","C. 64 mL/hr","D. 84 mL/hr"],
      correct:["C"],
      rationale:"Holliday-Segar 100/50/20 rule: First 10 kg × 100 = 1000 mL/day. Next 10 kg × 50 = 500 mL/day. Remaining 4 kg × 20 = 80 mL/day. Total = 1580 mL/day ÷ 24 hrs = 65.8 mL/hr ≈ 64–66 mL/hr. Answer A uses only 1 mL/kg/hr (incorrect formula). Answer B misapplies the 50 rule across all weight. The 100/50/20 method must be applied in steps across weight brackets.",
      trap:"Many students multiply all 24 kg by one number. The formula changes rate at each weight bracket — apply each rule to only its portion of the weight."
    },
    {
      id:"m7_4",concept:"Hypertonic dehydration correction rate",
      stem:"A 10-month-old with hypernatremic dehydration (Na 162 mEq/L) is receiving IV fluid therapy. The parent asks why the IV is running so slowly. What is the nurse's best explanation?",
      options:["A. 'We are running it slowly to avoid overloading the kidneys with too much fluid at once'","B. 'We are lowering the sodium gradually — dropping it too fast causes the brain to swell, which can trigger seizures'","C. 'A slow rate prevents infection at the IV site and reduces phlebitis risk'","D. 'The slow rate is a standard precaution for all infants under 12 months regardless of sodium level'"],
      correct:["B"],
      rationale:"Hypernatremic dehydration must be corrected slowly — no more than 10–15 mEq/L sodium reduction per 24 hours. If sodium drops rapidly, the now-hyperosmolar cells absorb water too quickly → cerebral edema → seizures. This is the specific danger of rapid correction in hypertonic dehydration. Answer A describes fluid overload precaution (relevant to cardiac/renal patients, not the primary concern here).",
      trap:"The goal is to prevent rebound cerebral edema during correction, not just to avoid overloading the kidneys."
    },
    {
      id:"m7_5",concept:"Bicarbonate as severity marker",
      stem:"A 2-year-old with vomiting and diarrhea for 4 days has the following labs: Na 138, K 3.6, bicarb 11 mEq/L. Which interpretation is correct?",
      options:["A. The bicarbonate level suggests mild dehydration — ORT is appropriate","B. The bicarbonate level suggests moderate-to-severe dehydration — IV fluids are likely needed","C. The low bicarbonate indicates metabolic alkalosis from vomiting","D. The bicarbonate is within normal limits and requires no intervention"],
      correct:["B"],
      rationale:"Bicarbonate < 13 mEq/L typically indicates likely need for IV fluids; < 17 indicates moderate-severe dehydration. At 11, this child likely needs IV access and fluid resuscitation. Diarrhea causes loss of bicarbonate in stool → metabolic acidosis (low bicarb). Answer C is incorrect — alkalosis comes from vomiting (HCl loss raises bicarb); diarrhea causes acidosis. Bicarb of 11 is well below the normal range of 21–28 in children.",
      trap:"Diarrhea → metabolic acidosis (low bicarb). Vomiting → metabolic alkalosis (high bicarb). Do not mix these up."
    },
    {
      id:"m7_6",concept:"ORT — what not to use",
      stem:"A nurse is teaching the parent of a 15-month-old with mild dehydration from gastroenteritis. Which statement by the nurse is correct regarding oral fluid choices?",
      options:["A. 'Diluted apple juice works well because it is gentle on the stomach'","B. 'Sports drinks like Gatorade provide the right electrolyte balance for children'","C. 'Pedialyte or a similar ORS solution is preferred — fruit juices and sports drinks have the wrong electrolyte ratios'","D. 'Plain water is best — it replaces the fluid without adding any extra sugar'"],
      correct:["C"],
      rationale:"WHO/UNICEF ORS (oral rehydration solution) has sodium 75 mEq/L and glucose 75 mmol/L — the optimal ratio for intestinal absorption. Fruit juices have high sugar and low sodium, which can worsen diarrhea osmotically. Sports drinks have similar problems — wrong electrolyte composition for pediatric rehydration. Plain water dilutes serum electrolytes and can cause hyponatremia. Answer A and B name common parent errors; Answer D is dangerous in dehydrated children.",
      trap:"Parents often assume sports drinks are appropriate because adults use them for hydration — in pediatric dehydration, the electrolyte composition is wrong."
    },
    {
      id:"m7_7",concept:"Minimum UO monitoring",
      stem:"A 4-year-old (18 kg) admitted for moderate dehydration is receiving IV fluids. The nurse is monitoring urinary output. Over the past 2 hours, the child voided 15 mL total. How should the nurse interpret this finding?",
      options:["A. Output is acceptable — 15 mL over 2 hours meets the minimum threshold","B. Output is low — the minimum is 1 mL/kg/hr, so the expected minimum was 36 mL over 2 hours","C. Output is high — expect low output for the first 6 hours of fluid resuscitation","D. Output is acceptable — minimum UO for children over 3 years is 0.5 mL/kg/hr"],
      correct:["B"],
      rationale:"Minimum UO for older children/adolescents is 1 mL/kg/hr. For an 18 kg child: 18 mL/hr minimum × 2 hours = 36 mL minimum. 15 mL is significantly below threshold and indicates ongoing poor perfusion or inadequate fluid replacement. The nurse should notify the provider. Answer A applies the wrong threshold. Answer D uses an adult critical-care threshold (0.5 mL/kg/hr), which is not the pediatric standard.",
      trap:"Do not apply the adult minimum (0.5 mL/kg/hr) to pediatric patients. Pediatric minimum is 1–2 mL/kg/hr depending on age."
    },
    {
      id:"m7_8",concept:"Isotonic dehydration — shock risk",
      stem:"A nurse is triaging three children with dehydration. Child A has Na 136 (isotonic). Child B has Na 125 (hypotonic). Child C has Na 157 (hypertonic). Which child is at greatest risk for hypovolemic shock?",
      options:["A. Child A — isotonic dehydration has the greatest shock risk","B. Child B — the low sodium indicates the most fluid loss","C. Child C — hypertonic dehydration is always the most severe","D. All three children have equal risk of shock based on sodium alone"],
      correct:["A"],
      rationale:"Isotonic dehydration (normal Na 130–150) carries the greatest shock risk because fluid loss is proportional across compartments — the intravascular volume drops directly. In hypotonic dehydration, some fluid shifts into cells but cerebral edema is the primary danger. In hypertonic dehydration, cellular fluid shifts OUT of cells — the intravascular space is relatively preserved early, making neurologic damage (not shock) the primary concern. Isotonic is also the most common type.",
      trap:"Greater sodium abnormality does not equal greater shock risk. Isotonic dehydration = highest shock risk despite 'normal' sodium."
    }
  ],
  M8: [
    {
      id:"m8_1",concept:"AGN vs Nephrotic — discrimination",
      stem:"A nurse is caring for two 7-year-old children on the nephrology unit. Child A has periorbital edema worst in the morning, tea-colored urine, elevated BP, and a positive ASO titer. Child B has frothy urine, generalized edema including scrotal swelling, normal BP, and serum albumin of 1.8 g/dL. Which statement correctly differentiates these presentations?",
      options:["A. Child A has nephrotic syndrome; corticosteroids should be started","B. Child B has AGN; antibiotics and antihypertensives are priority interventions","C. Child A has AGN; Child B has nephrotic syndrome — the urine and BP findings are the key discriminators","D. Both children likely have AGN — periorbital edema is pathognomonic for AGN regardless of other findings"],
      correct:["C"],
      rationale:"Child A's presentation is classic AGN: tea-colored (hematuria) urine, periorbital edema worst in morning, hypertension, and positive ASO titer confirming post-streptococcal cause. Child B shows classic nephrotic: frothy urine (massive proteinuria), generalized dependent edema including scrotal, normal or low BP, and markedly low albumin (1.8 < 2.5 g/dL). These are distinct pathophysiologies — AGN is an immune complex deposition disease; nephrotic is a protein-leak disease. Answer A and B swap the diagnoses incorrectly.",
      trap:"Both conditions cause periorbital edema. The distinction: AGN = periorbital only, worse in AM; Nephrotic = generalized edema in all dependent areas."
    },
    {
      id:"m8_2",concept:"Nephrotic syndrome treatment",
      stem:"A 4-year-old is newly diagnosed with minimal change nephrotic syndrome (MCNS). The parent asks why the child needs to take 'steroids for so long.' What is the nurse's best explanation?",
      options:["A. 'The steroids kill the bacteria that caused your child's kidneys to leak protein'","B. 'The steroids reduce immune system overactivity that is causing the kidneys to lose protein — a full course takes 12 weeks total'","C. 'The steroids prevent blood clots that form when protein levels are low'","D. 'Your child only needs steroids for 2 weeks — the typical course is short and very effective'"],
      correct:["B"],
      rationale:"MCNS is caused by immune dysregulation that destroys the glomerular charge barrier, causing massive protein loss. Corticosteroids suppress this immune response. The standard course is prednisone 2 mg/kg/day × 6 weeks, then 1.5 mg/kg every other day × 6 weeks — 12 weeks total. MCNS is NOT caused by bacteria (Answer A). Answer C describes DVT prophylaxis, which may be used but is not the reason for steroids. Answer D severely understates the course duration.",
      trap:"The steroid course is 12 weeks total (6 + 6), not a brief prescription — parents often stop early when edema resolves, which triggers relapse."
    },
    {
      id:"m8_3",concept:"AGN — potassium restriction",
      stem:"A 9-year-old with acute glomerulonephritis has oliguria (UO < 0.5 mL/kg/hr) and is on a restricted diet. The parent brought bananas and orange juice from home. What is the nurse's priority action?",
      options:["A. Allow the foods — potassium restriction is for nephrotic syndrome, not AGN","B. Remove the foods and explain that potassium restriction is needed during oliguria to prevent dangerous cardiac arrhythmias","C. Allow the orange juice but remove the bananas since only solid foods are restricted","D. Test the child's potassium level first before restricting dietary intake"],
      correct:["B"],
      rationale:"During oliguria in AGN, the kidneys cannot excrete potassium normally — hyperkalemia risk is real and can cause fatal cardiac arrhythmias. Potassium restriction (including high-K foods like bananas, citrus juice, potatoes) is a priority nursing action during the oliguric phase. This restriction is lifted when UO normalizes. Answer A is wrong — K restriction is specifically required in AGN during oliguria. Answer C is incorrect because all high-potassium foods and drinks are restricted.",
      trap:"Potassium restriction in AGN is temporary — it applies ONLY during the oliguric phase. When urine output returns, the restriction is lifted."
    },
    {
      id:"m8_4",concept:"C3 complement — 8-week rule",
      stem:"A child treated for AGN has a follow-up lab 10 weeks after diagnosis. The C3 complement level remains low. What is the correct nursing interpretation?",
      options:["A. This is expected — C3 remains suppressed for 6–12 months in AGN","B. This is concerning — C3 should normalize within 8 weeks; persistent low C3 suggests a different or additional diagnosis","C. This confirms the child has developed nephrotic syndrome as a complication","D. This is a normal finding in children under 10 and does not require follow-up"],
      correct:["B"],
      rationale:"In post-streptococcal AGN, C3 complement is consumed by immune complexes and should normalize within 8 weeks. If C3 is still low at 8–10 weeks, another diagnosis must be considered — such as membranoproliferative glomerulonephritis or lupus nephritis, which can mimic AGN but have persistent complement depression. This is a red flag requiring nephrology evaluation. Answer A overstates the expected recovery timeline.",
      trap:"The 8-week C3 normalization rule is a classic exam marker — still low at 8 weeks = investigate further, not 'give it more time.'"
    },
    {
      id:"m8_5",concept:"Minimum UO calculation",
      stem:"A nurse is monitoring an 8-kg 10-month-old admitted for nephrotic syndrome. Over the past 4 hours, the infant voided 55 mL. How should the nurse document this finding?",
      options:["A. Output is adequate — 55 mL over 4 hours exceeds the 1 mL/kg/hr minimum","B. Output is adequate — 55 mL over 4 hours exceeds the 2 mL/kg/hr minimum for infants","C. Output is inadequate — the minimum was 64 mL over 4 hours for this infant","D. Output is critically low — notify the provider immediately for < 100 mL over 4 hours"],
      correct:["C"],
      rationale:"For infants and young children, minimum UO = 2 mL/kg/hr. For an 8 kg infant: 8 × 2 × 4 hours = 64 mL minimum. The infant produced only 55 mL — below the threshold. The nurse should notify the provider. Answer A applies the wrong rate (1 mL/kg/hr is for older children). Answer B uses the right rate but calculates 32 mL minimum — incorrect math. Answer D uses an arbitrary absolute threshold rather than weight-based calculation.",
      trap:"Infants require 2 mL/kg/hr (not 1 mL/kg/hr). Applying the older-child rate to an infant gives you the wrong threshold and a missed oliguria finding."
    },
    {
      id:"m8_6",concept:"UTI — presentation by age",
      stem:"A 6-week-old is brought to the ED with a 2-day history of poor feeding, irritability, and a temperature of 38.6°C. Physical exam is unremarkable. What is the nurse's priority concern?",
      options:["A. Viral URI — common in this age group and self-limiting","B. UTI — fever of unknown origin in an infant under 2 months requires urine culture to rule out occult UTI","C. AGN — streptococcal infection often presents with fever and irritability in infants","D. Dehydration — poor feeding for 2 days is the primary clinical concern"],
      correct:["B"],
      rationale:"UTI is a common occult source of fever in infants — they cannot localize symptoms the way older children can. Any infant under 2 months with fever and no clear source must have a catheterized urine sample sent for UA and culture. Bag specimens are unreliable in infants due to contamination. Missing a UTI in an infant risks pyelonephritis, renal scarring, and sepsis. Answer A is premature without a source identified. AGN requires a prior strep infection with a 10–21 day lag, not acute fever in a 6-week-old.",
      trap:"Do not anchor on the vague symptoms and call it a viral illness — fever without source in an infant < 2 months = UTI is on the differential until ruled out by catheter culture."
    },
    {
      id:"m8_7",concept:"Nephrotic — DVT/PE risk",
      stem:"A nurse is reviewing discharge teaching for a 5-year-old with nephrotic syndrome. Which item is MOST important to include in the safety teaching?",
      options:["A. Avoid contact sports and high-impact play to prevent injury to the kidneys","B. Encourage fluid restriction at home to reduce edema recurrence","C. Report leg pain, difficulty breathing, or swelling of the calf immediately — the protein loss increases clotting risk","D. Restrict all activity until the next follow-up appointment to conserve energy"],
      correct:["C"],
      rationale:"Nephrotic syndrome causes loss of antithrombin III, protein C, and protein S through the urine → hypercoagulable state → DVT and PE risk. This is a confirmed exam content item (professor practice Q on slide 25). Parents must be taught to report signs of thromboembolism: leg swelling/pain, sudden shortness of breath, chest pain. Activity restriction and fluid restriction are not standard home recommendations for nephrotic syndrome. Children can typically attend school.",
      trap:"The hypercoagulability in nephrotic syndrome is frequently missed — students focus on the edema and electrolytes but forget that protein loss strips the natural anticoagulants."
    },
    {
      id:"m8_8",concept:"UTI — specimen collection",
      stem:"An 18-month-old girl in diapers is being evaluated for fever and foul-smelling urine. The parent offers to collect a urine sample at home using a bag attached to the perineum. What is the nurse's correct response?",
      options:["A. Accept the offer — bag specimens are acceptable for initial screening in diapered children","B. Decline — a catheterized specimen or suprapubic tap is needed; bag specimens have high contamination rates and are not reliable for diagnosis","C. Accept the offer if the parent cleans the perineum first with a sterile wipe","D. Decline and explain that the child needs an IV placement before any specimen can be collected"],
      correct:["B"],
      rationale:"Urine bag specimens in diapered children have contamination rates up to 65% due to skin flora, feces, and improper application — they are unreliable for diagnosis and should not be used to make antibiotic decisions. The correct specimen methods are: urethral catheterization (most common in clinical settings) or suprapubic aspiration (gold standard for sterility). Diagnosis and antibiotic treatment decisions require a reliable sample. Answer A and C use a known-unreliable method.",
      trap:"Parents often suggest bag specimens for convenience. The nurse must decline and explain — a contaminated specimen leads to false diagnosis, unnecessary antibiotics, or a missed true UTI."
    }
  ],
  M9: [
    {
      id:"m9_1",concept:"TET spell — sequence",
      stem:"A 7-month-old with known Tetralogy of Fallot suddenly becomes deeply cyanotic, agitated, and hyperpneic during the morning bath. SpO2 drops to 54%. What is the correct sequence of interventions?",
      options:["A. Apply high-flow O2 → place in knee-chest position → administer IV morphine","B. Place in knee-chest position → apply high-flow O2 → administer IV morphine → give small IVF bolus if needed","C. Administer IV morphine immediately → place in knee-chest position → apply O2","D. Push IV fluids 20 mL/kg immediately → apply O2 → call the physician"],
      correct:["B"],
      rationale:"TET spell management sequence (KOMP): Knee-chest FIRST (increases systemic vascular resistance → forces blood into pulmonary circulation), then O2 (high flow), then Morphine (reduces hyperpnea and anxiety), then IVF if needed — but only 5–10 mL/kg, not the standard 20 mL/kg bolus (avoid volume overload in a structurally abnormal heart). Knee-chest is the first intervention because it mechanically corrects the shunt physiology — O2 alone will not resolve the R→L shunting. Answer A puts O2 before position, which is the most common sequencing error.",
      trap:"The reflex is to give oxygen first — but the physiologic fix is knee-chest position first. Position changes the pressure gradient; O2 follows."
    },
    {
      id:"m9_2",concept:"CHD murmur identification",
      stem:"A nurse auscultates a continuous machine-like murmur best heard at the left infraclavicular area of a 3-week-old premature infant. The infant has bounding pulses and a widened pulse pressure. Which defect is most consistent with these findings?",
      options:["A. Ventricular septal defect — most common CHD, holosystolic murmur at LLSB","B. Coarctation of the aorta — systolic murmur heard between the shoulder blades","C. Patent ductus arteriosus — continuous machine-like murmur due to persistent L→R shunt between aorta and pulmonary artery","D. Tetralogy of Fallot — boot-shaped heart with holosystolic murmur"],
      correct:["C"],
      rationale:"The continuous machine-like murmur is pathognomonic for PDA — the ductus connects the aorta to the pulmonary artery and blood flows throughout the cardiac cycle (systole AND diastole), producing the characteristic sound. Bounding pulses and widened pulse pressure result from rapid runoff of blood into the pulmonary circulation. Prematurity significantly increases PDA risk. VSD has a holosystolic murmur at the LLSB. COA murmur is heard on the back. TOF is a cyanotic defect with right-sided findings.",
      trap:"'Continuous' is the key word — it differentiates PDA from all other murmurs, which are systolic or diastolic only."
    },
    {
      id:"m9_3",concept:"COA — BP differential",
      stem:"During a newborn assessment, the nurse checks blood pressure in all four extremities. The right arm BP is 78/48 mmHg. The right leg BP is 54/36 mmHg. Which interpretation is correct?",
      options:["A. This is a normal finding — lower extremity BP is always lower than upper extremity BP in neonates","B. This is abnormal — in infants under 1 year, all four extremity BPs should be equal; this differential suggests coarctation of the aorta","C. This is a normal finding — lower extremity BP is 10–40 mmHg higher than upper extremity after age 1 only","D. This is abnormal — the upper extremity BP is too low and the leg is at the correct level"],
      correct:["B"],
      rationale:"In infants under 1 year, all four extremity BPs should be equal — the leg pressure differential does not develop until after age 1. Upper extremity BP that significantly exceeds lower extremity BP in a neonate is abnormal and raises strong concern for coarctation of the aorta (obstruction above the femoral circulation). After age 1, legs running 10–40 mmHg higher than arms is normal. This neonate has the reversed pattern — upper > lower — which requires urgent cardiology evaluation.",
      trap:"The normal 'legs higher than arms' rule only applies AFTER age 1 — before age 1, all four extremities should be equal."
    },
    {
      id:"m9_4",concept:"PDA — pharmacologic closure",
      stem:"A 28-week premature infant is diagnosed with a hemodynamically significant PDA. The neonatologist plans pharmacologic closure. Which medication and mechanism is correct?",
      options:["A. Prostaglandin E1 — keeps the ductus open by maintaining prostaglandin levels","B. Indomethacin — a COX inhibitor that reduces prostaglandin synthesis, allowing the ductus to constrict and close","C. Sildenafil — reduces pulmonary artery pressure to close the ductus","D. Digoxin — improves cardiac contractility to compensate for the shunt"],
      correct:["B"],
      rationale:"The ductus arteriosus is kept open by prostaglandins. Indomethacin (an NSAID/COX inhibitor) blocks prostaglandin synthesis → the ductus loses its chemical stimulus to remain open → constricts and closes. This works specifically in premature infants whose ductus is still prostaglandin-dependent. In term infants, the ductus closes by different mechanisms and indomethacin is less effective. Prostaglandin E1 (Answer A) does the opposite — it OPENS the ductus, used in ductal-dependent lesions like COA to perfuse the lower body.",
      trap:"PGE1 opens the ductus; indomethacin closes it. These are opposites and both appear on exams — COA neonates get PGE1; PDA premature infants get indomethacin."
    },
    {
      id:"m9_5",concept:"Ondansetron — drug class",
      stem:"A child receiving chemotherapy is prescribed ondansetron (Zofran) for nausea. The parent asks how the medication works. Which response by the nurse is accurate?",
      options:["A. 'It blocks dopamine receptors in the brain, which prevents nausea signals from reaching the vomiting center'","B. 'It blocks serotonin (5-HT3) receptors in both the GI tract and the brain, which prevents nausea and vomiting'","C. 'It is an antihistamine that blocks histamine release in the inner ear to prevent motion-related nausea'","D. 'It increases stomach emptying, which reduces the buildup of food and acid that triggers vomiting'"],
      correct:["B"],
      rationale:"Ondansetron is a 5-HT3 (serotonin) receptor antagonist — it blocks serotonin receptors in the GI tract and chemoreceptor trigger zone (CTZ) in the medulla, preventing chemotherapy-induced nausea and vomiting. The drug CLASS is 'serotonin antagonist' — this is directly tested by the professor. Answer A describes metoclopramide (a dopamine antagonist/prokinetic). Answer C describes dimenhydrinate (antihistamine). Answer D also describes metoclopramide's prokinetic effect.",
      trap:"Ondansetron looks like it could block dopamine (like antipsychotics) or histamine (like Dramamine) — it blocks NEITHER. It's specifically a serotonin (5-HT3) antagonist."
    },
    {
      id:"m9_6",concept:"VSD — most common CHD",
      stem:"During a pediatric cardiac lecture, a student asks: 'Which congenital heart defect is most common overall?' The correct answer is:",
      options:["A. Tetralogy of Fallot — it involves four defects, making it the most complex and most common","B. Ventricular septal defect — most common CHD overall; 20–60% close spontaneously in the first 2 years","C. Patent ductus arteriosus — extremely common in premature infants makes it the most prevalent overall","D. Coarctation of the aorta — accounts for more than half of all CHD diagnoses"],
      correct:["B"],
      rationale:"VSD is the most common congenital heart defect overall. It is an acyanotic L→R shunt, produces a holosystolic murmur at the left lower sternal border, and many small VSDs (especially in the muscular septum) close spontaneously within the first 2 years. TOF is the most common cyanotic CHD — a different question with a different answer. PDA is common in premature infants but is not the most common CHD overall.",
      trap:"'Most common CHD overall' = VSD. 'Most common cyanotic CHD' = TOF. These are two separate facts that often appear in the same exam."
    },
    {
      id:"m9_7",concept:"4-extremity BP — age rules",
      stem:"A nurse is assessing a 3-year-old during a well-child visit. The arm BP is 92/58 mmHg. The leg BP is 108/68 mmHg. Which interpretation is correct?",
      options:["A. This is abnormal — the leg BP should equal the arm BP in all children under age 5","B. This is abnormal — the higher leg pressure suggests pulmonary hypertension","C. This is normal — after age 1, systolic BP in the lower extremities runs 10–40 mmHg higher than the upper extremities","D. This is normal — the leg BP is always higher because leg vessels are larger"],
      correct:["C"],
      rationale:"After age 1, the systolic BP in lower extremities is normally 10–40 mmHg higher than upper extremities due to increased lower-extremity muscle mass and vessel tone. This 3-year-old's finding (16 mmHg higher in legs) is completely normal. The 4-extremity equal rule applies only to infants under 1 year. If UPPER extremity BP EXCEEDED lower extremity BP, that would signal coarctation. The reverse (legs higher) is the normal adult and pediatric-over-1 pattern.",
      trap:"Do not apply the under-1 (all equal) rule to a 3-year-old. After age 1, legs running higher is expected and normal."
    },
    {
      id:"m9_8",concept:"TOF — 4 defects",
      stem:"A parent of a child with Tetralogy of Fallot asks: 'What exactly is wrong with my child's heart?' Which nurse response is accurate?",
      options:["A. 'There is a hole between the top two chambers of the heart and the main artery is narrowed'","B. 'There are four defects: a hole between the lower chambers, the right ventricle is thickened, the main lung artery is narrowed, and the aorta sits over the hole'","C. 'The main vessel connecting the aorta to the lungs did not close properly after birth'","D. 'The main artery leaving the heart is narrowed, which creates high blood pressure in the upper body'"],
      correct:["B"],
      rationale:"TOF has four defects (PROV): Pulmonary stenosis (narrowed lung artery), Right ventricular hypertrophy (thickened RV wall from working against the obstruction), Overriding aorta (aorta straddles the VSD), and VSD (hole between ventricles). The combination causes deoxygenated blood to shunt R→L through the VSD into systemic circulation → cyanosis. Answer A vaguely describes ASD + something else. Answer C describes PDA. Answer D describes COA.",
      trap:"PROV: Pulmonary stenosis, Right ventricular hypertrophy, Overriding aorta, VSD. All four must be named — partial answers miss the question."
    }
  ],
  M10: [
    {
      id:"m10_1",concept:"Digoxin hold parameter",
      stem:"A nurse is preparing to administer the morning digoxin dose to a 4-month-old with congenital heart failure. The nurse obtains an apical pulse of 88 bpm for one full minute. What is the correct action?",
      options:["A. Administer the dose — 88 bpm is within normal range for a 4-month-old","B. Hold the dose and notify the provider — the apical rate is below the infant hold threshold of 90–110 bpm","C. Administer half the dose — the heart rate is borderline, so a reduced dose is appropriate","D. Recheck in 15 minutes — a single low reading is not clinically significant"],
      correct:["B"],
      rationale:"The hold parameter for digoxin in infants (< 1 year) is apical HR < 90–110 bpm. At 88 bpm, this dose must be held and the provider notified before administration. Digoxin slows conduction — giving it at a rate already near the threshold risks pushing the infant into dangerous bradycardia. The apical pulse must be counted for a full minute before every dose. Never split the dose or recheck without notifying the provider.",
      trap:"Many students use the child threshold (< 70 bpm) for all ages. The infant threshold is higher — 90–110 bpm — because infants have naturally faster resting rates."
    },
    {
      id:"m10_2",concept:"Digoxin toxicity — GBV triad",
      stem:"A 6-year-old on long-term digoxin therapy is brought to the clinic by parents who report the child has been vomiting for 2 days and refusing meals. Vitals: HR 54, BP 94/62, RR 22. Which interpretation is correct?",
      options:["A. This is likely viral gastroenteritis — common at this age; continue digoxin and monitor","B. This presentation suggests digoxin toxicity — hold the dose, check digoxin level, and assess potassium immediately","C. The bradycardia alone confirms toxicity; the vomiting is unrelated","D. Continue digoxin — vomiting and bradycardia are expected side effects that resolve with time"],
      correct:["B"],
      rationale:"Digoxin toxicity triad (GBV): GI symptoms (nausea, vomiting, anorexia — FIRST signs), Bradycardia, Visual changes (halos). This child has HR 54 (< 70 bpm child threshold) and 2 days of vomiting — both classic toxicity signs. The nurse must hold the dose, check serum digoxin level, and immediately check potassium (hypokalemia potentiates toxicity by allowing digoxin to bind more strongly to Na+/K+ ATPase). Answer A is dangerous — viral illness alone does not cause bradycardia at 54 in a child on digoxin.",
      trap:"GI symptoms — especially vomiting and anorexia — are the FIRST signs of digoxin toxicity in children. Do not dismiss them as viral illness when the child is on digoxin."
    },
    {
      id:"m10_3",concept:"Caloric needs — cardiac infant",
      stem:"A 3-month-old with a large VSD and heart failure is not gaining weight despite breastfeeding on demand. The care team considers nutritional supplementation. Which caloric target is correct for this infant?",
      options:["A. 100 kcal/kg/day — this is the standard infant requirement","B. 120 kcal/kg/day — a slight increase above normal is sufficient for catch-up growth","C. 150 kcal/kg/day or more — cardiac infants have significantly increased metabolic demands from increased work of breathing","D. 80 kcal/kg/day — fluid restriction is a priority, so caloric density must be reduced"],
      correct:["C"],
      rationale:"Cardiac infants require ≥ 150 kcal/kg/day (compared to the normal 100 kcal/kg/day) because increased work of breathing, tachycardia, and sympathetic activation greatly increase their metabolic rate. Standard formula is 20 kcal/oz and can be concentrated to 24–30 kcal/oz by adding MCT oil or glucose polymers — but the increase must be gradual (too fast → diarrhea → dehydration). Answer A is the normal requirement and is insufficient for cardiac infants. Answer D is incorrect — fluid restriction is rarely used in infants and caloric density is increased, not decreased.",
      trap:"150 kcal/kg/day is 50% above the normal infant requirement — this is a large jump that surprises students. Cardiac infants burn calories just maintaining their increased cardiorespiratory work."
    },
    {
      id:"m10_4",concept:"HF sign clusters — 3 categories",
      stem:"A nurse is assessing a 5-month-old with unrepaired VSD and heart failure. The infant is diaphoretic during feeding, has a respiratory rate of 68, mild intercostal retractions, and hepatomegaly. Which HF sign cluster does hepatomegaly represent?",
      options:["A. Impaired myocardial function — hepatomegaly indicates poor cardiac output","B. Pulmonary venous congestion — the liver enlarges from backup of fluid into the lungs","C. Systemic venous congestion — the liver is the largest reservoir for backed-up venous blood from right-sided failure","D. Hepatomegaly is not a sign of heart failure — this requires an abdominal ultrasound to investigate"],
      correct:["C"],
      rationale:"The three HF sign clusters are: (1) Impaired myocardial function — tachycardia, diaphoresis with feeding, poor perfusion; (2) Pulmonary venous congestion — tachypnea, retractions, cyanosis; (3) Systemic venous congestion — peripheral edema, hepatomegaly, weight gain, periorbital edema. Hepatomegaly is the cardinal systemic venous congestion sign — the liver is the largest blood reservoir and fills from right-sided venous backup. The infant in this question shows all three clusters simultaneously, which is typical in pediatric HF.",
      trap:"Students often link hepatomegaly to impaired output — it actually reflects venous BACKUP (right-sided), not forward failure."
    },
    {
      id:"m10_5",concept:"Hypokalemia + digoxin interaction",
      stem:"A 7-month-old with CHF is receiving both furosemide and digoxin. Morning labs show potassium 2.8 mEq/L. What is the nurse's priority action?",
      options:["A. Administer both medications as ordered — a single low potassium reading is not clinically significant","B. Hold the digoxin and notify the provider — hypokalemia increases digoxin toxicity risk significantly","C. Hold the furosemide only — it is causing the potassium loss and should be discontinued","D. Administer digoxin and supplement potassium together — they are safe to give simultaneously"],
      correct:["B"],
      rationale:"Hypokalemia is the most important electrolyte abnormality that potentiates digoxin toxicity. Potassium and digoxin compete for the same Na+/K+ ATPase binding site — when potassium is low, digoxin binds more aggressively, causing toxicity even at therapeutic drug levels. Furosemide causes potassium loss, creating a dangerous combination in this infant. The nurse must hold digoxin, notify the provider, and expect potassium replacement orders before resuming digoxin. Answer D is dangerous — giving digoxin with known hypokalemia before correction is not safe.",
      trap:"Furosemide + digoxin is a classic combination that creates potassium depletion + increased digoxin sensitivity — always check K+ when both are prescribed."
    },
    {
      id:"m10_6",concept:"NG tube indication for cardiac infant",
      stem:"A nurse is feeding an 8-week-old with congenital heart disease. The infant takes 15 minutes to drink 20 mL and then falls asleep exhausted. The infant needs 60 mL per feeding per the nutrition plan. What is the nurse's correct action?",
      options:["A. Continue offering the bottle — infants naturally pace themselves and will finish when hungry","B. Supplement the remaining volume via NG tube — if feeding takes > 30 minutes or the infant cannot complete the volume, NG is indicated","C. Increase the nipple flow rate and try again in 1 hour","D. Document the incomplete feeding and notify the dietitian — do not insert an NG tube without a physician order"],
      correct:["B"],
      rationale:"If a cardiac infant takes more than 30 minutes to complete a feeding or cannot maintain adequate intake, NG tube insertion is a therapeutic nursing intervention. Exhaustion with feeding increases O2 demand and can worsen cardiac strain. The goal is to provide adequate calories with minimum exertion. NG feeding is not a failure — it is the clinically correct call. A respiratory rate > 80–100/min during feeding is another NG indication. These criteria do not require a new physician order when already part of the care plan.",
      trap:"Parents and students sometimes view NG tube use as a last resort — in cardiac infants, it is a planned early intervention to protect cardiac workload."
    },
    {
      id:"m10_7",concept:"Cluster care rationale",
      stem:"A nurse finishes a full assessment of an infant with heart failure. The charge nurse asks why the nurse bathed the infant, changed the diaper, administered medications, and checked vitals all within the same 20-minute window rather than spacing activities throughout the shift. Which rationale is correct?",
      options:["A. It is more time-efficient for the nurse to complete all tasks at once and reduces documentation burden","B. Cluster care groups nursing activities to allow maximum uninterrupted rest periods — reduced stimulation and exertion directly decreases cardiac oxygen demand","C. It prevents skin breakdown from repeated repositioning when care is spread out","D. Clustering care is a hospital policy for infection control purposes — it reduces the number of times staff enter the room"],
      correct:["B"],
      rationale:"Cluster care is a deliberate therapeutic nursing strategy for infants with heart failure — not a time management hack. Each stimulation event (diapering, repositioning, assessment) causes a transient increase in heart rate and O2 consumption. By grouping activities, the nurse allows extended rest periods that reduce total cardiac workload. This is especially important because infants with HF have minimal cardiac reserve. The rationale must connect directly to reducing metabolic demand and protecting cardiac output.",
      trap:"Cluster care is not about nursing convenience — it is a nursing INTERVENTION that directly reduces cardiac oxygen consumption."
    },
    {
      id:"m10_8",concept:"Digoxin — HIGH ALERT administration",
      stem:"A nurse is preparing digoxin for a 3-month-old. The order reads 0.025 mg. The concentration available is 0.05 mg/mL. The nurse draws up 0.5 mL. Before administering, what is the priority safety action?",
      options:["A. Administer — the math checks out and the volume is within the infant limit","B. Verify the dose with a second RN — digoxin is a HIGH ALERT medication requiring two-nurse verification before every dose","C. Contact pharmacy to confirm the concentration before proceeding","D. Administer half the volume first and reassess heart rate before giving the rest"],
      correct:["B"],
      rationale:"Digoxin is designated a HIGH ALERT medication — two-nurse verification is required before EVERY dose in pediatric patients. Even if the math is correct, the second nurse independently recalculates dose, checks the order, and verifies the drawn-up volume before the medication reaches the patient. The infant dose maximum is 1 mL (50 mcg) — drawing up more than 1 mL for an infant is an automatic stop-and-recheck signal. Answer A skips a required safety step. Answer D is dangerous — do not split doses.",
      trap:"Two-nurse verification for digoxin is a non-negotiable safety standard, not an optional precaution. The question asks for PRIORITY action — safety verification before administration."
    }
  ],
  M11: [
    {
      id:"m11_1",concept:"CPP formula + normal values",
      stem:"A 4-year-old with bacterial meningitis has the following vitals: BP 102/68, ICP 22 mmHg. The nurse calculates the cerebral perfusion pressure. Which interpretation is correct?",
      options:["A. CPP = 80 mmHg — well above normal; no intervention needed","B. CPP = 57 mmHg — MAP must be calculated first: (102 + 2×68)/3 = 79 mmHg; CPP = 79 − 22 = 57 mmHg — which is within acceptable pediatric range (40–60 mmHg) but approaching the upper limit","C. CPP = 34 mmHg — this is critically low and requires immediate intervention","D. CPP cannot be calculated without a central arterial line"],
      correct:["B"],
      rationale:"CPP = MAP − ICP. MAP = (SBP + 2×DBP) ÷ 3 = (102 + 136) ÷ 3 = 238 ÷ 3 ≈ 79 mmHg. CPP = 79 − 22 = 57 mmHg. Normal pediatric CPP is 40–60 mmHg — this is at the high end but acceptable. The concern is the elevated ICP of 22 (normal ≤ 15 mmHg). If ICP continues rising or MAP drops, CPP will fall below 40 → brain ischemia. The formula MAP = (SBP + 2×DBP)/3 must be memorized for bedside calculation.",
      trap:"Students often subtract SBP − ICP directly, skipping the MAP calculation. MAP always first, then subtract ICP."
    },
    {
      id:"m11_2",concept:"ICP nursing interventions — priority",
      stem:"A 6-year-old with traumatic brain injury is in the PICU. ICP is 20 mmHg. Which nursing intervention is the priority?",
      options:["A. Elevate the HOB to 30–45° and maintain the head in midline position","B. Administer corticosteroids as ordered to reduce cerebral edema","C. Place the child in Trendelenburg position to increase cerebral blood flow","D. Suction the airway every 2 hours regardless of secretion status"],
      correct:["A"],
      rationale:"HOB elevated 15–30° with head in midline position is the first-line non-pharmacologic intervention for elevated ICP — it promotes venous drainage from the brain and reduces cerebral blood volume, lowering ICP. Corticosteroids (Answer B) are NOT recommended for traumatic brain injury edema — they provide no benefit and may cause harm. They ARE used in bacterial meningitis. Trendelenburg (Answer C) increases ICP by promoting venous pooling in the head. Routine suctioning (Answer D) spikes ICP transiently and should be minimized.",
      trap:"Corticosteroids for TBI = NO. Corticosteroids for bacterial meningitis = YES. This distinction is a classic exam trap — do not give steroids for TBI-related edema."
    },
    {
      id:"m11_3",concept:"Bacterial vs viral meningitis — CSF",
      stem:"A lumbar puncture is performed on an 8-year-old with high fever, neck stiffness, and petechial rash. CSF results: appearance — cloudy; glucose — 28 mg/dL (low); protein — 180 mg/dL (high); WBC — 2,400 cells/mm³ with 92% neutrophils. Which interpretation is correct?",
      options:["A. These findings indicate viral meningitis — a clear CSF is not required for diagnosis","B. These findings indicate bacterial meningitis — cloudy CSF, low glucose, high protein, and neutrophilic pleocytosis are the classic profile","C. These findings are normal — CSF values in children differ significantly from adults","D. These findings suggest fungal meningitis — the protein level is unusually high"],
      correct:["B"],
      rationale:"Bacterial meningitis CSF profile: cloudy/turbid (bacteria + WBCs), LOW glucose (bacteria consume glucose), HIGH protein (bacteria excrete protein as waste), and WBC elevation dominated by NEUTROPHILS. Viral meningitis shows: clear CSF, normal or mildly low glucose, normal or mildly elevated protein, and lymphocyte-dominant WBC. The mnemonic: 'Bacteria EAT glucose and POOP protein.' This child also has petechiae, which raises concern for meningococcemia — a medical emergency.",
      trap:"Clear vs cloudy CSF and neutrophils vs lymphocytes are the two sharpest discriminators between bacterial and viral meningitis."
    },
    {
      id:"m11_4",concept:"Seizure — first-line medication",
      stem:"A 3-year-old child in the ED develops a tonic-clonic seizure. The seizure has lasted 7 minutes and is ongoing. The nurse is preparing medication. Which agent is correct first-line treatment?",
      options:["A. Phenytoin IV — the standard for all pediatric seizures > 5 minutes","B. A benzodiazepine — lorazepam IV, diazepam rectal, or midazolam intranasal — is first-line for acute seizure termination","C. Mannitol IV — osmotic diuretics reduce cerebral edema and terminate seizure activity","D. Dexamethasone IV — corticosteroids prevent seizure progression in febrile children"],
      correct:["B"],
      rationale:"Benzodiazepines are first-line for acute seizure termination in all age groups: lorazepam IV (preferred if IV access), diazepam rectal (if no IV), or midazolam intranasal or buccal (rapid and effective without IV). Seizures > 5 minutes require immediate pharmacologic intervention. Fosphenytoin is second-line (maintenance/chronic epilepsy). Mannitol reduces ICP — it does not terminate seizures. Corticosteroids are not indicated for seizure management.",
      trap:"Phenytoin/fosphenytoin = maintenance or second-line. Benzodiazepines = acute first-line. Never reach for phenytoin first in an actively seizing child."
    },
    {
      id:"m11_5",concept:"GCS intubation threshold",
      stem:"An 11-year-old is brought to the ED after a motor vehicle accident with head injury. GCS is calculated: Eye opening to pain (2), best verbal response — confused words (4), best motor response — withdrawal to pain (4). Total GCS = 10. What is the correct nursing action?",
      options:["A. Prepare for immediate intubation — GCS of 10 is below the intubation threshold of 12","B. Continue monitoring — the threshold for intubation is GCS ≤ 8; GCS 10 warrants close neurological monitoring but not immediate intubation","C. The GCS is reassuring — GCS 10 is essentially normal for a child post-trauma","D. Prepare for intubation — any GCS below 15 after head trauma requires airway protection"],
      correct:["B"],
      rationale:"The intubation threshold is GCS ≤ 8 — below this, the child cannot reliably protect the airway. GCS 10 (while significantly abnormal) does not meet the intubation threshold and warrants serial neurological assessments, escalating monitoring, and emergent neurology consultation but not automatic intubation. If GCS drops to 8 or below, intubation must be prepared immediately. GCS 15 is normal; GCS 12 triggers emergent neurology consultation; GCS ≤ 8 triggers intubation.",
      trap:"GCS ≤ 8 = intubate. Not ≤ 10, not ≤ 12. The threshold is specifically 8 — memorize the number."
    },
    {
      id:"m11_6",concept:"Fontanelle closure times",
      stem:"A nurse is teaching a new parent about their infant's fontanelles. The nurse states: 'Your baby has two soft spots. The smaller one in the back closes first.' Which statement correctly describes the timeline?",
      options:["A. Posterior fontanelle closes at 18 months–2 years; anterior closes at 2–3 months","B. Posterior fontanelle closes at 2–3 months; anterior fontanelle closes at 18 months–2 years","C. Both fontanelles should be closed by 6 months of age","D. The anterior fontanelle closes first because it is smaller and under less pressure"],
      correct:["B"],
      rationale:"Posterior fontanelle = smaller, closes at 2–3 months. Anterior fontanelle = larger (the main one parents feel), closes at 18 months–2 years. Assessment of the anterior fontanelle (bulging = ↑ ICP; sunken = dehydration) is relevant through nearly 2 years. The posterior closes quickly and is rarely clinically relevant after 3 months. Answer A reverses the two closures — a classic detail-flip exam trap.",
      trap:"Posterior closes EARLIER (2–3 months); anterior closes LATER (18 months–2 years). The larger fontanelle stays open longer."
    },
    {
      id:"m11_7",concept:"Febrile seizure — parent teaching",
      stem:"A parent of a 2-year-old who just had a febrile seizure is very upset. The parent says, 'I will give Tylenol at the first sign of any fever so it never happens again.' What is the nurse's most accurate response?",
      options:["A. 'That is a great plan — fever control is the proven way to prevent febrile seizure recurrence'","B. 'Antipyretics do not prevent febrile seizure recurrence — they can make your child more comfortable, but they will not stop a seizure from happening again'","C. 'The goal should be to keep the temperature below 100.4°F at all times — monitoring every 2 hours is recommended'","D. 'You should use a tepid sponge bath alongside the Tylenol for the fastest temperature reduction'"],
      correct:["B"],
      rationale:"Antipyretics (acetaminophen, ibuprofen) do NOT prevent febrile seizure recurrence — this is a confirmed exam trap from the module. Febrile seizures are triggered by the RAPID RISE in temperature, not the absolute fever level. By the time a parent recognizes fever and gives medication, the temperature has already risen. Recurrence risk is 1/3 (30%) of children. Prophylactic AEDs are also not given between seizures. Tepid sponge baths are NOT recommended — they are ineffective at reducing core temperature and increase discomfort.",
      trap:"Parents almost always believe Tylenol will prevent the next seizure. The correct teaching is: it won't — but it makes your child comfortable."
    },
    {
      id:"m11_8",concept:"Epidural hematoma — lucid interval",
      stem:"A 9-year-old fell from a bike and briefly lost consciousness, but then appeared alert and was talking normally. The parent drove to the ED because the child developed a severe headache 2 hours later and is now lethargic and difficult to rouse. What does this presentation suggest and what is the priority action?",
      options:["A. Concussion — brief LOC followed by normal behavior is classic; the headache and lethargy are expected post-concussion symptoms","B. Epidural hematoma — the lucid interval (brief LOC → appears normal → deteriorates) is a classic pattern; CT scan and neurosurgical consultation are urgent","C. Subdural hematoma — this is the most common traumatic brain bleed in children and requires MRI for diagnosis","D. Viral meningitis triggered by minor trauma — the headache and altered LOC indicate meningeal involvement"],
      correct:["B"],
      rationale:"The lucid interval — brief LOC at impact, followed by a period of appearing normal (minutes to hours), then sudden deterioration — is the classic presentation of epidural hematoma, caused by arterial bleeding (usually middle meningeal artery). The critical error is discharging or reassuring the family during the lucid interval. CT head is the diagnostic study of choice; neurosurgical evaluation is urgent. Subdural hematomas can also cause altered LOC but typically without the classic lucid interval pattern.",
      trap:"The lucid interval is the most dangerous reassurance trap in pediatric head trauma — the child looks fine, the parent relaxes, and then the child deteriorates. Never discharge after head trauma based on a lucid interval alone."
    }
  ],
  M12: [
    {
      id:"m12_1",concept:"Pyloric stenosis — presentation",
      stem:"A 5-week-old male infant presents with a 1-week history of vomiting that has become increasingly forceful. The parent reports the infant vomits 'across the room' 30–45 minutes after every feeding and then immediately wants to feed again. The infant has lost 400g since birth. Physical exam reveals a small, firm, oval mass in the epigastric area. Which diagnosis and management are correct?",
      options:["A. Intussusception — treat with pneumoenema immediately","B. Hypertrophic pyloric stenosis — correct the dehydration and metabolic alkalosis first, then pyloromyotomy","C. Hirschsprung disease — the mass indicates aganglionic bowel requiring surgical resection","D. GERD — the vomiting is positional; elevate the head of the bed and add thickener to feeds"],
      correct:["B"],
      rationale:"Classic pyloric stenosis presentation: projectile nonbilious vomiting (before duodenum, so no bile), infant still hungry after vomiting (distinguishes from sepsis/HF), palpable olive-shaped mass in the epigastric area, and visible gastric peristaltic waves. Management sequence: FIRST correct dehydration and hypochloremic metabolic alkalosis (vomiting causes loss of HCl → low Cl, high pH), THEN perform pyloromyotomy (Ramstedt procedure). Operating on a metabolically deranged infant increases anesthesia risk — the electrolyte correction may delay surgery 24–48 hours.",
      trap:"Pyloric stenosis does not go straight to surgery — the metabolic alkalosis must be corrected first, even if that delays the OR."
    },
    {
      id:"m12_2",concept:"Intussusception — treatment",
      stem:"A 10-month-old is brought to the ED with sudden-onset colicky abdominal pain — the child screams and draws knees to the chest, then appears comfortable between episodes. A sausage-shaped mass is felt in the right upper quadrant. Ultrasound confirms intussusception. What is the first-line treatment?",
      options:["A. Emergency laparotomy — intussusception requires immediate surgical reduction","B. Pneumoenema or ultrasound-guided saline enema — nonoperative reduction is successful in 65–75% of cases","C. IV antibiotics and bowel rest — treatment is supportive until spontaneous resolution","D. NG tube insertion and nasogastric irrigation to reduce the telescoped bowel"],
      correct:["B"],
      rationale:"First-line treatment for intussusception is pneumoenema (air enema) or saline enema under fluoroscopy or ultrasound — this nonoperatively reduces the telescoped bowel in 65–75% of cases. Surgery is reserved for failed enema reduction or if bowel perforation has occurred. IV antibiotics alone do not treat the mechanical obstruction. NG tube would decompress the stomach but cannot reduce a telescoped bowel segment. The classic triad (pain, currant jelly stools, mass) is only present in < 30% of cases — pain alone is enough to suspect it.",
      trap:"Intussusception = pneumoenema first, NOT surgery first. Surgery is the backup if the enema fails or the bowel perforates."
    },
    {
      id:"m12_3",concept:"Hirschsprung disease — diagnostic findings",
      stem:"A male newborn has not passed meconium in 48 hours. Abdominal distention is noted and the infant has had bilious vomiting. The nurse suspects Hirschsprung disease. Which finding confirms this diagnosis?",
      options:["A. Ultrasound showing absent pyloric muscle contractions","B. Rectal biopsy showing absence of ganglion cells in the affected bowel segment","C. Positive ASO titer confirming post-infectious bowel dysfunction","D. Barium enema showing dilation of the proximal colon without a transition zone"],
      correct:["B"],
      rationale:"Definitive diagnosis of Hirschsprung disease is rectal biopsy showing ABSENCE of ganglion cells (parasympathetic neurons) in the affected segment. Without ganglion cells, the internal anal sphincter cannot relax and peristalsis is absent → functional obstruction. Barium enema shows a transition zone (narrow aganglionic segment → dilated normal segment) but biopsy is the definitive test. Absent pyloric muscle contractions describe pyloric stenosis. ASO titer is for post-streptococcal conditions (AGN). Failure to pass meconium within 24–48 hours in a newborn is the hallmark presenting symptom.",
      trap:"Barium enema shows a transition zone but is NOT definitive — rectal biopsy is the gold standard for Hirschsprung diagnosis."
    },
    {
      id:"m12_4",concept:"Cleft palate post-op restrictions",
      stem:"A 10-month-old is 1 day post-op from cleft palate repair. The parent brought a pacifier from home to soothe the infant. What is the nurse's response?",
      options:["A. Allow the pacifier — sucking is comforting and will not damage the repair at this stage","B. Remove the pacifier — no objects may be placed in the mouth after cleft palate repair; the suture line must be protected from any oral contact","C. Allow the pacifier but limit use to 10 minutes at a time","D. Replace the pacifier with a teething ring — it will soothe without entering the oral cavity"],
      correct:["B"],
      rationale:"Post-operative cleft palate care strictly prohibits ANY objects in the mouth: no pacifiers, no straws, no suction tips, no spoons, no thermometers, no tongue depressors. Any oral object can disrupt the surgical repair and cause dehiscence of the suture line. Elbow immobilizers are used to prevent the infant from touching the suture line with their hands. This restriction is a priority nursing teaching point for all family members. Answer A is dangerous. Answer C sets an arbitrary time limit that has no clinical basis.",
      trap:"Pacifier prohibition is absolute post-cleft palate repair — parents almost always ask this, and the answer is always no, with no exceptions."
    },
    {
      id:"m12_5",concept:"Pyloric stenosis — metabolic lab finding",
      stem:"An infant with hypertrophic pyloric stenosis has a blood gas result: pH 7.52, PaCO2 46, HCO3 36 mEq/L, Cl 88 mEq/L. Which interpretation is correct?",
      options:["A. Metabolic acidosis — the diarrhea has caused bicarbonate loss","B. Respiratory alkalosis — hyperventilation from pain is driving the pH change","C. Hypochloremic metabolic alkalosis — repeated vomiting causes loss of HCl, depleting chloride and raising bicarbonate","D. Normal values — these fall within acceptable ranges for a neonate"],
      correct:["C"],
      rationale:"Pyloric stenosis causes projectile vomiting of gastric contents (HCl) — not bile (the obstruction is before the ampulla of Vater). Loss of HCl: chloride falls → serum bicarbonate rises as compensation → metabolic alkalosis. High pH (7.52), high bicarb (36), and low Cl (88, normal 98–106) confirm hypochloremic metabolic alkalosis. This is the classic lab finding of pyloric stenosis and must be corrected before surgical repair. Diarrhea causes metabolic ACIDOSIS (bicarbonate lost in stool) — the opposite.",
      trap:"Vomiting = alkalosis (HCl lost). Diarrhea = acidosis (bicarb lost). These are opposite acid-base effects that commonly appear as exam traps on the same test."
    },
    {
      id:"m12_6",concept:"Intussusception — currant jelly timing",
      stem:"A parent brings a 14-month-old to the urgent care with 3 hours of episodic inconsolable crying. Between episodes, the child appears comfortable and plays normally. There are no bloody stools. Which statement best guides the nurse's clinical reasoning?",
      options:["A. The absence of currant jelly stools rules out intussusception at this stage","B. Currant jelly stools are a late sign of intussusception — the episodic colicky pain pattern alone warrants imaging even without bloody stools","C. The episodic pain pattern is reassuring because the child is comfortable between episodes — this is likely colic","D. Intussusception at this age is rare — this presentation is most consistent with constipation"],
      correct:["B"],
      rationale:"Currant jelly stools (blood + mucus from ischemic bowel) are a LATE sign of intussusception — appearing in < 30% of cases at presentation. The classic early presentation is sudden episodic colicky abdominal pain with the child pulling knees to the chest during pain, then appearing completely normal between episodes. Waiting for bloody stools before ordering imaging delays diagnosis and risks bowel necrosis. Ultrasound is the first diagnostic step. Intussusception is most common in children under 2 — this 14-month-old is in the peak age range.",
      trap:"Do not wait for the classic full triad before acting — most children with intussusception do NOT present with all three findings. Episodic colicky pain = get the ultrasound."
    },
    {
      id:"m12_7",concept:"Cleft lip repair timing",
      stem:"A parent of a newborn diagnosed with cleft lip and cleft palate asks: 'When will my baby need surgery?' What is the nurse's correct response regarding repair timing?",
      options:["A. 'Both defects are repaired together in one surgery at 6 months of age'","B. 'The cleft lip is repaired first at 2–3 months of age; the cleft palate is repaired separately before 12 months to protect speech development'","C. 'Surgery is typically performed at birth, before the infant goes home from the hospital'","D. 'The palate is repaired first at 2–3 months; the lip can wait until the child is 2–3 years old'"],
      correct:["B"],
      rationale:"Cleft lip repair: 2–3 months of age. Cleft palate repair: before 12 months — the palate must be closed before speech development accelerates to prevent abnormal speech patterns that become harder to correct later. These are staged, separate surgeries. Doing them together increases anesthetic risk and operative complexity without clear benefit. Answer D reverses the order incorrectly. About 20–30% of palate repairs require a secondary procedure.",
      trap:"Lip first at 2–3 months; palate before 12 months. Palate timing is driven by speech development, not anatomy — the window is the first year of life."
    },
    {
      id:"m12_8",concept:"Hirschsprung — Down syndrome association",
      stem:"A 2-day-old with Down syndrome has not yet passed meconium and has a distended abdomen. The nurse should communicate which concern to the provider?",
      options:["A. This is expected in Down syndrome — delayed meconium passage is a normal variant in infants with trisomy 21","B. This warrants evaluation for Hirschsprung disease — Down syndrome is the most common syndrome associated with it; failure to pass meconium within 48 hours is the hallmark neonatal presentation","C. This suggests pyloric stenosis — Down syndrome increases the risk of pyloric muscle hypertrophy","D. This is likely meconium ileus from cystic fibrosis — cystic fibrosis is common in Down syndrome"],
      correct:["B"],
      rationale:"Down syndrome is the most common syndrome associated with Hirschsprung disease. Any infant with Down syndrome who fails to pass meconium within 24–48 hours must be evaluated for Hirschsprung's until proven otherwise. Failure to pass meconium is the hallmark neonatal presentation — caused by the absence of ganglion cells preventing the internal sphincter from relaxing. This is a confirmed exam point. Pyloric stenosis does not cause failure to pass meconium (it causes vomiting). Cystic fibrosis is not associated with Down syndrome.",
      trap:"Down syndrome + no meconium at 48 hours = Hirschsprung's until proven otherwise. The association is direct and exam-tested."
    }
  ]
};
