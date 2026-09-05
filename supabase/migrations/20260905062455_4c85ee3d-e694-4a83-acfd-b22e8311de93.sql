CREATE POLICY "Portfolio files are readable" ON storage.objects FOR SELECT USING (bucket_id = 'portfolio-files');
CREATE POLICY "Signed-in editor can upload portfolio files" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'portfolio-files');
CREATE POLICY "Signed-in editor can update portfolio files" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'portfolio-files');
CREATE POLICY "Signed-in editor can delete portfolio files" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'portfolio-files');