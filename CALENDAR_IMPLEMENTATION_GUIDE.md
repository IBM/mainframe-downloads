# DevOps Distance Learning Program - Calendar Download Implementation Guide

## Overview

This guide documents the calendar download feature added to the DevOps Distance Learning Program training page. The feature allows users to download training schedule files (.ics format) for three regions (Americas, APAC, EMEA) and import them into their calendar applications.

## What Was Implemented

### 1. Directory Structure

Created a new directory for calendar files:
```
Training/calendars/
├── README.md          # Documentation for maintaining calendar files
├── .gitkeep          # Ensures directory is tracked in git
├── americas.ics      # (To be added by you) - Americas/Eastern USA schedule
├── apac.ics          # (To be added by you) - APAC/Singapore schedule
└── emea.ics          # (To be added by you) - EMEA/Central European schedule
```

### 2. HTML Modifications

Modified `Training/idzrdz-remote-training.html` to add a calendar download section between the page heading and the schedule tabs (after line 1107).

**Features Added:**
- Prominent calendar download section with visual styling
- Three regional calendar options (Americas, APAC, EMEA)
- Download button for each region to get the .ics file
- Collapsible instructions section with detailed steps for importing into:
  - Google Calendar
  - Apple Calendar (macOS/iOS)
  - Outlook (Desktop & Web)

### 3. Visual Design

The calendar section uses:
- IBM Design System color palette (#0f62fe for primary blue)
- Responsive flexbox layout that adapts to different screen sizes
- Card-based design with subtle shadows
- Clear visual hierarchy with icons and color coding
- Collapsible details element for instructions (keeps page clean)

## Next Steps - Adding Your .ics Files

### Step 1: Prepare Your .ics Files

You need to create three .ics files with your training schedules. Each file should contain all the training sessions for that region.

**File naming (important - must match exactly):**
- `americas.ics` - For Eastern USA timezone sessions
- `apac.ics` - For Singapore/APAC timezone sessions  
- `emea.ics` - For Central European timezone sessions

### Step 2: .ics File Format Example

Here's a basic template for an .ics file:

```ics
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//IBM//DevOps Distance Learning Program//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:IDz Training - Americas
X-WR-TIMEZONE:America/New_York
X-WR-CALDESC:IBM Developer for z/OS Training Schedule - Americas/Eastern USA

BEGIN:VEVENT
UID:idz-training-americas-20260127-module1@ibm.com
DTSTAMP:20260127T120000Z
DTSTART;TZID=America/New_York:20260127T100000
DTEND;TZID=America/New_York:20260127T110000
SUMMARY:IDz on Eclipse - Module 1 - Navigation
DESCRIPTION:Class overview, Workspace installation & customization, IDz Terms & Concepts, Eclipse Navigation for ISPF Developers, DevOps Tooling overview, Split-Screen, Use of multi-windowed views, Overview of Program Control Flow, Bookmarks, and more.
LOCATION:Online - WebEx Link TBD
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT

BEGIN:VEVENT
UID:idz-training-americas-20260128-module2@ibm.com
DTSTAMP:20260127T120000Z
DTSTART;TZID=America/New_York:20260128T100000
DTEND;TZID=America/New_York:20260128T110000
SUMMARY:IDz on Eclipse - Module 2 - Editing and Code Development
DESCRIPTION:IDz code editors & development productivity techniques, ISPF emulation: Command line commands/Prefix area commands, Hot Key definitions, Editing source with embedded Hex characters, JCL editing, IDz's source download and program model, and Content Assist.
LOCATION:Online - WebEx Link TBD
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT

END:VCALENDAR
```

**Key fields to include for each event:**
- `UID` - Unique identifier (use a consistent format)
- `DTSTART` - Start date/time with timezone
- `DTEND` - End date/time with timezone
- `SUMMARY` - Event title
- `DESCRIPTION` - Event details
- `LOCATION` - Meeting link or location
- `STATUS` - Usually "CONFIRMED"

### Step 3: Upload Your .ics Files

Once you have your three .ics files ready:

1. Place them in the `Training/calendars/` directory
2. Ensure file names match exactly: `americas.ics`, `apac.ics`, `emea.ics`
3. Verify files are valid .ics format (you can test by opening in a calendar app)

### Step 4: Test the Implementation

After uploading the files:

1. Open `Training/idzrdz-remote-training.html` in a web browser
2. Scroll to the "IDz on Eclipse and IDz on VS Code User Training Schedule" section
3. You should see the calendar download section with three regional options
4. Test each "Download Calendar" button - should download the .ics file
5. Try importing the downloaded file into your calendar app to verify it works

### Step 5: Deploy to Production

Once tested locally:

1. Commit all changes to your git repository:
   ```bash
   git add Training/idzrdz-remote-training.html
   git add Training/calendars/
   git commit -m "Add calendar download feature for DevOps training schedules"
   ```

2. Deploy to your web server (developer.ibm.com/mainframe/)

3. Verify the download links work from the production site

## Maintaining the Calendars

### Updating Schedules

When training schedules change:

1. Edit the appropriate .ics file(s) in `Training/calendars/`
2. Update event details (dates, times, descriptions)
3. Keep the same `UID` for existing events (helps users identify which events changed)
4. Add new events with new unique `UID`s
5. Deploy the updated files

**Important:** Since users download the files (not subscribe), they will need to download and re-import the updated .ics file to see changes. Consider adding a note on the page when schedules are updated.

### Best Practices

- **Consistent UIDs**: Use a consistent format like `idz-training-{region}-{date}-{module}@ibm.com`
- **Timezone Accuracy**: Always specify the correct timezone for each region
- **Clear Descriptions**: Include comprehensive event descriptions
- **Meeting Links**: Update LOCATION field with actual meeting links when available
- **Test Before Deploy**: Always test .ics files locally before deploying
- **Version Control**: Keep old versions of .ics files in case you need to reference them

### Notifying Users of Updates

Since this is a download-only implementation (not a subscription), users won't automatically receive updates. Consider:

1. Adding a "Last Updated" date on the page
2. Sending email notifications when schedules change significantly
3. Adding a note in the instructions about checking back for updates
4. Using a version number in the calendar name (e.g., "IDz Training - Americas v2.0")

## Troubleshooting

### Common Issues

**Issue: Download button gives 404 error**
- Solution: Check that .ics files are in the correct directory (`Training/calendars/`) and file names match exactly (lowercase, no spaces)

**Issue: Events show wrong timezone**
- Solution: Verify TZID in .ics file matches the intended timezone (e.g., `America/New_York`, `Asia/Singapore`, `Europe/Paris`)

**Issue: Calendar app won't import the file**
- Solution: Validate the .ics file format using an online validator or try opening it in a text editor to check for syntax errors

**Issue: Some events are missing after import**
- Solution: Check that all events have unique UIDs and proper BEGIN:VEVENT/END:VEVENT tags

## Technical Details

### File Format

The implementation uses standard iCalendar (.ics) format which:
- Is supported by all major calendar applications
- Can contain multiple events in a single file
- Includes timezone information for accurate scheduling
- Is human-readable (plain text format)

### Browser Compatibility

The calendar download feature works with:
- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Works on all operating systems

### Accessibility

The implementation includes:
- Semantic HTML structure
- Clear button labels with emoji icons for visual clarity
- Collapsible instructions (reduces cognitive load)
- High contrast colors for readability
- Keyboard navigation support

## Creating .ics Files

### Tools You Can Use

1. **Calendar Applications**: Export events from Google Calendar, Outlook, or Apple Calendar as .ics
2. **Online Generators**: Use online .ics file generators
3. **Text Editor**: Manually create following the iCalendar RFC 5545 specification
4. **Scripts**: Write a script to generate .ics files from a spreadsheet or database

### Recommended Workflow

1. Create events in your preferred calendar application
2. Export as .ics file
3. Edit the file to ensure proper formatting and timezone info
4. Test by importing into different calendar apps
5. Deploy to the Training/calendars/ directory

## Support

For questions or issues with the calendar download feature:
1. Check the `Training/calendars/README.md` for maintenance guidelines
2. Verify .ics file format using an online validator
3. Test downloads in different browsers and calendar applications

## Summary

✅ **Completed:**
- Created `Training/calendars/` directory structure
- Modified `Training/idzrdz-remote-training.html` with calendar download section
- Added comprehensive import instructions for Google Calendar, Apple Calendar, and Outlook
- Implemented responsive design matching IBM Design System
- Created documentation for maintenance

⏳ **Your Action Required:**
- Create and upload three .ics files (americas.ics, apac.ics, emea.ics)
- Test the implementation locally
- Deploy to production server

The calendar download feature is now ready for your .ics files!