// API Configuration
const API_URL = 'https://ubsuofrvgbvtryjuzxhb.supabase.co/rest/v1';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVic3VvZnJ2Z2J2dHJ5anV6eGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2Mjc4MDUsImV4cCI6MjA1NjIwMzgwNX0.-SOdP6tT6URg_Z9x-L9j3R4jw-mSNofm4zIiykmcGYA';

// API Service
const api = {
    // Headers for API requests
    headers: {
        'apikey': API_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
    },

    // Fetch all students
    async getStudents() {
        try {
            const response = await fetch(`${API_URL}/student?select=*`, {
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error('Failed to fetch students');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching students:', error);
            throw error;
        }
    },

    async createNewStudent(student) {
        try {
            const response = await fetch(`${API_URL}/student`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(student)
            });
            if (!response.ok) {
                throw new Error('Failed to add student');
            }

            return await response.json();
        } catch (error) {
            console.log('error adding student:', error);
            throw error;
        }

    },

    async editStudent(student) {
        try {
            const response = await fetch(`${API_URL}/student?code=eq.${student.id}`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify(student)
            });
            if (!response.ok) {
                throw new Error('Failed to edit student');
            }
            return await response.json();
        } catch (error) {
            console.error(`Error editing student with the code ${student.code}:`, error);
            throw error;

        }
    }
}