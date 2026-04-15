**Table: contacts**
Field - Notes
contact_id - Primary key
email - Sometimes null
phone_number - Often duplicated
created_date - Not always first interaction
source - Generic (e.g. “web”)
source_detail - Sometimes campaign
lead_flag - Inconsistently used
status - Free text in some cases

**Table: leads**
Field - Notes
lead_id - Primary key
contact_id - FK
created_date - May differ from contact created
lead_status - Values vary (New, Qualified, etc.)
lead_source - Duplicates contact.source
campaign_id - Not always populated
score - Only for some leads
assigned_to - Sales agent
is_converted - Boolean but not always accurate

**Table: opportunities**
Field - Notes
opportunity_id - Primary key
contact_id - FK
created_date - Sometimes manually created
stage - Free text variations
value - Not always populated
close_date - Often updated retrospectively

**Table: activities (calls, interactions)**
Field - Notes
activity_id - Primary key
contact_id - FK
activity_type - Call, email, etc.
activity_date - Sometimes missing
outcome - Free text
source_system - CRM vs dialler

**Table: campaigns**
Field - Notes
campaign_id - Primary key
campaign_name - Inconsistent naming
channel - e.g. Paid Search, Email
start_date - 
end_date - 

**Table: dialler_logs (separate system)**
Field - Notes
dial_id - Primary key
contact_id - FK (sometimes missing)
call_time - Reliable
outcome - Structured
agent_id - 