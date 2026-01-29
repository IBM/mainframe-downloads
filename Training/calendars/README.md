# DevOps Distance Learning Program - Calendar Files

This directory contains calendar download files (.ics format) for the three regional training schedules.

## Files

- **americas.ics** - Training schedule for Americas/Eastern USA timezone
- **apac.ics** - Training schedule for APAC/Singapore timezone  
- **emea.ics** - Training schedule for EMEA/Central European timezone

## Instructions for Updating Calendar Files

When the training schedule changes, update the corresponding .ics file(s) in this directory.

### Important Notes

1. **File Names**: Keep the file names exactly as listed above (lowercase, no spaces)
2. **Format**: Files must be valid iCalendar (.ics) format
3. **Encoding**: Use UTF-8 encoding
4. **Testing**: After updating, test by downloading and importing into a calendar app

### Download URLs

The calendar download URLs used on the training page are:
- Americas: `./calendars/americas.ics`
- APAC: `./calendars/apac.ics`
- EMEA: `./calendars/emea.ics`

## Creating/Updating .ics Files

You can create .ics files using:
- Calendar applications (export as .ics)
- Online .ics generators
- Manual editing (follow iCalendar RFC 5545 specification)

Each event should include:
- **SUMMARY** - Event title
- **DTSTART** - Start date/time with timezone
- **DTEND** - End date/time with timezone
- **DESCRIPTION** - Event details
- **LOCATION** - Meeting link or location
- **UID** - Unique identifier (use consistent format)
- **STATUS** - Usually "CONFIRMED"

### Example Event Format

```ics
BEGIN:VEVENT
UID:idz-training-americas-20260127-module1@ibm.com
DTSTAMP:20260127T120000Z
DTSTART;TZID=America/New_York:20260127T100000
DTEND;TZID=America/New_York:20260127T110000
SUMMARY:IDz on Eclipse - Module 1 - Navigation
DESCRIPTION:Class overview, Workspace installation & customization...
LOCATION:Online - WebEx Link
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
```

## Deployment

After updating .ics files:
1. Test the file by importing it into a calendar application
2. Commit changes to the repository
3. Deploy to the web server
4. **Important**: Since users download (not subscribe to) these files, they will need to download and re-import the updated file to see changes
5. Consider notifying users when significant schedule changes are made

## User Communication

Since this is a download-only implementation (not a subscription):
- Users won't automatically receive updates
- Consider adding a "Last Updated" date on the training page
- Send email notifications for major schedule changes
- Remind users to check back periodically for updates

## Troubleshooting

### Common Issues

**File won't download**
- Check file exists in this directory
- Verify file name matches exactly (case-sensitive)
- Ensure file has .ics extension

**Calendar app won't import**
- Validate .ics file format using an online validator
- Check for proper BEGIN/END tags
- Verify timezone identifiers are correct

**Events show wrong times**
- Ensure TZID matches the intended timezone
- Use standard timezone identifiers (e.g., America/New_York, Asia/Singapore, Europe/Paris)

## Best Practices

1. **Consistent UIDs**: Use format like `idz-training-{region}-{date}-{module}@ibm.com`
2. **Timezone Accuracy**: Always specify correct timezone for each region
3. **Clear Descriptions**: Include comprehensive event details
4. **Meeting Links**: Update LOCATION field with actual meeting links
5. **Version Control**: Keep backup copies of previous versions
6. **Test Before Deploy**: Always test downloads and imports before deploying