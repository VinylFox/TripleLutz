Ext.ns('App', 'Manager');

Ext.ns('Ext.ux');

App.settings = {
	entries:{
		dataUrl: 'entries.json',
        listingFields: ['entry_id', 'gh_login', 'latest_commit_date', 'latest_commit_id', 'score'],
        listingHeadings: ['#', 'Athlete', 'Submitted','GH_ID','Score'],
        listingEditors: ['textfield', 'textfield', 'textfield', 'textfield', 'textfield'],
        listingWidths: [60, 250, 250, 250, 250],
        listingRenderers: ['textfield', 'textfield', 'textfield', 'textfield', 'textfield']
	},
	entriesUpdateUrl: 'entries.json'
};

App.settings.dataFormat = 'json'

