<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function showContact(Request $request)
    {
        // Get the ID from the request, default to null if not provided
        $contactId = $request->query('id');
        
        // Start query builder to filter by status=1
        $query = Contact::where('status', 1);
        
        // If ID is provided, add to filter
        if ($contactId) {
            $query->where('id', $contactId);
        }
        
        // Execute the query
        $contact = $query->get();

        return response()->json([
            'list_of_contact' => $contact,
            'status' => 200,
            'message' => "Success"
        ]);
    }
}