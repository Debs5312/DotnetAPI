using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.IRepository;
using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repository
{
    public class ContentRepo : IContentRepo
    {
        private readonly DataContext _db;

        public ContentRepo(DataContext db)
        {
            _db = db;
        }

        public async Task<Content> createContent(Content content)
        {
            content.DateCreated = DateTime.Now;
            content.LastModified = DateTime.Now;
            _db.Contents.Add(content);
            await _db.SaveChangesAsync();
            return content;
        }

        public async Task deleteContent(int id)
        {
            var content = await _db.Contents.FirstOrDefaultAsync(p => p.Id == id);
            if(content == null) return;
            _db.Contents.Remove(content);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Content>> getContents()
        {
            return await _db.Contents.ToListAsync();
        }

        public async Task<Content> getSingleContent(int id)
        {
            return await _db.Contents.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Content> updateContent(string content, int id)
        {
            var item = await _db.Contents.FirstOrDefaultAsync(p => p.Id == id);
            item.LastModified = DateTime.Now;
            item.Item = content;
            await _db.SaveChangesAsync();
            return item;
        }
    }
}